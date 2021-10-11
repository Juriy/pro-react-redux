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
      label: text,
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
      const findIndex = arr.findIndex((ItemData) => ItemData.id === id);
      const newObj = {...arr[findIndex], [attributeName]: !arr[findIndex][attributeName]};
      return [...arr.slice(0, findIndex), newObj, ...arr.slice(findIndex + 1)];
  };

  calculateBooleanAttribute = (AttributeName, boolean) => {
    return this.state.todoData.filter((itemToDo) => itemToDo[AttributeName] === boolean).length;
  };

  onToggleDoneClick = (id) => {
    this.setState(({todoData}) => {
      return {todoData: this.togleBooleanAttribute(todoData, id, 'done')};
    })
  };

  onToggleImportantClick = (id) => {
    this.setState(({todoData}) => {
      return {todoData: this.togleBooleanAttribute(todoData, id, 'important')};
    })
  };

  state = {
    todoData: [this.createItem('Drink Coffee'), this.createItem('Make Awesome App'), this.createItem('Have a lunch')],
  };

  render() {
    const {deleteButtonClick, addItemClick, onToggleImportantClick, onToggleDoneClick} = this;
    const {todoData} = this.state;
    const toDo = this.calculateBooleanAttribute('done', false);
    const done = this.calculateBooleanAttribute('done', true);

    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleteButtonClick={deleteButtonClick}
          onToggleDoneClick={onToggleDoneClick}
          onToggleImportantClick={onToggleImportantClick}
        />
        <ItemAddForm onAddItemClick={addItemClick} />
      </div>
    );
  }
}
