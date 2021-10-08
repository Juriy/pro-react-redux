import React from 'react';

const TodoListItem = ({label, important}) => {
  const style = {
    color: important ? 'tomato' : ''
  }

  return ( 
    <span style={style}>{label}</span>
  )
}

export default TodoListItem