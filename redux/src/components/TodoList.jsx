import React from 'react';
import { TodoItem } from './TodoItem';

const TodoList=({todos,deleteTodo,toggleTodo})=>{
  return (
    <ul>
      {
        todos.map((todo,index)=><TodoItem deleteTodo={deleteTodo} toggleTodo={toggleTodo} key={todo.id} todo={todo} />)
      }
    </ul>
  )
}

export default TodoList;