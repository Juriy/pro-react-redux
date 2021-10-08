import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({todoData}) => { 
  const elements = todoData.map((data) => {
    return (
      <li>
        <TodoListItem {...data}/>
      </li>
    )
  })

  return ( 
    <ul>
      {elements}
    </ul>  
  )
}

export default TodoList