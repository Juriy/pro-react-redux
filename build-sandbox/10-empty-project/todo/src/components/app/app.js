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

  calculateBooleanAttribute = (AttributeName, boolean) => {
    return this.state.todoData.filter((itemToDo) => itemToDo[AttributeName] === boolean).length;
  };

  createButtonObj = (label, isActive) => {
    return {
      id: this.maxId++,
      isActive,
      label,
    };
  };

  activeButtonFilter = (arr, id) => {
    return [
      ...arr.map((button, index) => {
        if (id === button.id) {
          return {...button, isActive: true};
        }
        return {...button, isActive: false};
      }),
    ];
  };

  showAllItems = (arr) => {
    return [
      ...arr.map((item) => {
        return {...item, isHidden: false};
      }),
    ];
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
    const valueInput = evt.target.value;
    const isSameString = (itemIndex) => {
      const label = this.state.todoData[itemIndex].label;
      return label.slice(0, valueInput.length).toLowerCase() !== valueInput.toLowerCase();
    };

    if (valueInput === '') {
      this.setState(({todoData}) => {
        return {todoData: this.showAllItems(todoData)};
      });
    }

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData.map((item, index) => {
          return isSameString(index) ? {...item, isHidden: true} : {...item, isHidden: false};
        }),
      ];
      return {todoData: newArr};
    });
  };

  onFilterButtonClick = (buttonId, label) => {
    this.setState(({buttons, todoData}) => {
      let newArr = this.showAllItems(todoData);
      
      if (label === 'done') {
        newArr = [
          ...todoData.map((item, index) => {
            return  !item.done ? {...item, isHidden: true} : {...item, isHidden: false};
          }),
        ];
      }

      if (label === 'active') {
        newArr = [
          ...todoData.map((item, index) => {
            return  item.done ? {...item, isHidden: true} : {...item, isHidden: false};
          }),
        ];
      }   
      

      return {buttons: this.activeButtonFilter(buttons, buttonId), todoData: newArr};
    });
  };

  state = {
    todoData: [this.createItem('Drink Coffee'), this.createItem('Make Awesome App'), this.createItem('Have a lunch')],
    buttons: [this.createButtonObj('all', true), this.createButtonObj('active'), this.createButtonObj('done')],
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

    const {todoData, buttons} = this.state;
    const toDo = this.calculateBooleanAttribute('done', false);
    const done = this.calculateBooleanAttribute('done', true);

    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchInput={onSearchInput} />
          <ItemStatusFilter buttons={buttons} onFilterButtonClick={onFilterButtonClick} />
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
