import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import {Component} from 'react/cjs/react.production.min';

export default class App extends Component {
  maxId = 100;
  createItem = (text, important = false) => {
    return {
      done: false,
      id: this.maxId++,
      important,
      label: text,
    };
  };

  state = {
    activeFilter: 'all',
    isImportantFilter: false,
    searchPhrase: '',
    todoData: [
      this.createItem('Drink Coffee'),
      this.createItem('Make Awesome App'),
      this.createItem('Have a lunch', true),
    ],
  };

  deleteButtonClick = (id) => {
    this.setState(({todoData}) => {
      return {todoData: todoData.filter((data) => data.id !== id)};
    });
  };

  addItemClick = (text) => {
    const newItem = this.createItem(text);
    this.setState(({todoData}) => {
      return {todoData: [...todoData, newItem]};
    });
  };

  togleBooleanAttribute = (arr, id, attributeName) => {
    const indexChangeObj = arr.findIndex((ItemData) => ItemData.id === id);
    const oldObj = arr[indexChangeObj];
    const newObj = {...oldObj, [attributeName]: !oldObj[attributeName]};
    return [...arr.slice(0, indexChangeObj), newObj, ...arr.slice(indexChangeObj + 1)];
  };

  onToggleDoneClick = (id) => {
    this.setState(({todoData}) => {
      return {todoData: this.togleBooleanAttribute(todoData, id, 'done')};
    });
  };

  onToggleImportantClick = (id) => {
    this.setState(({todoData}) => {
      return {todoData: this.togleBooleanAttribute(todoData, id, 'important')};
    });
  };

  onSearchInput = (searchPhrase) => {
    this.setState({searchPhrase: searchPhrase.toLowerCase()});
  };

  onFilterButtonClick = (buttonName) => {
    this.setState({
      activeFilter: buttonName,
    });
  };

  onFilterImportantClick = () => {
    this.setState(({isImportantFilter}) => {
      return {isImportantFilter: !isImportantFilter}
    });
  };  

  render() {
    const {
      deleteButtonClick,
      addItemClick,
      onToggleImportantClick,
      onToggleDoneClick,
      onSearchInput,
      onFilterButtonClick,
      onFilterImportantClick,
    } = this;

    const {todoData, buttons, activeFilter, searchPhrase, isImportantFilter} = this.state;

    const getFilterStatusTodoData = (arr, activeFilterStatus) => {
      const filter = {
        active: arr.filter(({done}) => !done),
        done: arr.filter(({done}) => done),
        all: arr,
      };
      return filter[activeFilterStatus] || arr;
    };

    const getFilterNameItemsTodoData = (arr, searchPhrase) => {
      return arr.filter(({label}) => label.toLowerCase().indexOf(searchPhrase) > -1);
    };

    const getImportantItemsTodoData = (arr, isImportantFilter) => {
      return isImportantFilter ? arr.filter(({important}) => important) : arr;
    };

    const toDo = todoData.filter((itemToDo) => !itemToDo.done).length;
    const done = todoData.filter((itemToDo) => itemToDo.done).length;
    const filterNames = getFilterNameItemsTodoData(todoData, searchPhrase);
    const filterStatusTodoData = getFilterStatusTodoData(filterNames, activeFilter);
    const importantTodoData = getImportantItemsTodoData(filterStatusTodoData, isImportantFilter);

    const renderTodoData = importantTodoData;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchInput={onSearchInput} />
          <ItemStatusFilter
            activeFilter={activeFilter}
            buttons={buttons}
            isImportantFilter={isImportantFilter}
            onFilterButtonClick={onFilterButtonClick}
            onFilterImportantClick={onFilterImportantClick}
          />
        </div>
        <TodoList
          todos={renderTodoData}
          onDeleteButtonClick={deleteButtonClick}
          onToggleDoneClick={onToggleDoneClick}
          onToggleImportantClick={onToggleImportantClick}
        />
        <ItemAddForm onAddItemClick={addItemClick} />
      </div>
    );
  }
}
