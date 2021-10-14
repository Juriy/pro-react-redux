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

  createItem = (text) => {
    return {
      done: false,
      id: this.maxId++,
      important: false,
      isHidden: false,
      label: text,
    };
  };

  createButtonObj = (label, isActive = false) => {
    return {
      id: label,
      isActive,
      label,
    };
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

  onSearchInput = (evt) => {
    this.setState({searchPhrase: evt.target.value.toLowerCase()});
  };

  onFilterButtonClick = (buttonId, label) => {
    this.setState({activeFilter: label})
  };

  state = {
    activeFilter: 'all',
    buttons: [this.createButtonObj('all'), this.createButtonObj('active'), this.createButtonObj('done')],
    searchPhrase: '',
    todoData: [this.createItem('Drink Coffee'), this.createItem('Make Awesome App'), this.createItem('Have a lunch')],
  };

  render() {
    const {
      deleteButtonClick,
      addItemClick,
      onToggleImportantClick,
      onToggleDoneClick,
      onSearchInput,
      onFilterButtonClick,
    } = this;
    
    // const filteredStateTodoData = (arr, activeFilter) => {
    //   return arr.filter((item) => {
    //     return !item.done;
    //   })
    // }

    const {todoData, buttons} = this.state;
    const toDo = this.state.todoData.filter((itemToDo) => itemToDo.done === false).length;
    const done = this.state.todoData.filter((itemToDo) => itemToDo.done === true).length;
    const filteredTodoData = todoData.filter(({label}) => label.toLowerCase().indexOf(this.state.searchPhrase) > -1);
    // const visibleTodoData = filteredStateTodoData(filteredTodoData);


    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchInput={onSearchInput} />
          <ItemStatusFilter buttons={buttons} onFilterButtonClick={onFilterButtonClick} />
        </div>

        <TodoList
          todos={filteredTodoData}
          onDeleteButtonClick={deleteButtonClick}
          onToggleDoneClick={onToggleDoneClick}
          onToggleImportantClick={onToggleImportantClick}
        />
        <ItemAddForm onAddItemClick={addItemClick} />
      </div>
    );
  }
}
