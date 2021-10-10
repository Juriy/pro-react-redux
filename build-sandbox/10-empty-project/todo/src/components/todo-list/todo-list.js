import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todos, onDeleteButtonClick, onToggleDoneClick, onToggleImportantClick}) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleteButtonClick={() => onDeleteButtonClick(id)}
          onToggleImportantClick={() => onToggleImportantClick(id)}
          onToggleDoneClick={() => onToggleDoneClick(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
