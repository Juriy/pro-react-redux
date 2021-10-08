import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({todoData}) => {
  const elements = todoData.map((data) => {
    const {id, ...dataItem} = data;

    return (
      <li key={id}>
        <TodoListItem {...dataItem} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default TodoList;
