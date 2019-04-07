import React from 'react';

export const TodoItem=({todo,deleteTodo,toggleTodo})=>{
  return <li style={{textDecoration:todo.completed&&"line-through"}}>
    {todo.text}
    <button onClick={()=>toggleTodo(todo.id)}>{todo.completed?"todo":"ok"}</button>
    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
  </li>
}