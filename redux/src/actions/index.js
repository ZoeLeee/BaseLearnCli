export const VisibilityFilters={
  SHOW_ALL:"all",
  SHOW_COMPLETE:"complete",
  SHOW_UNCOMPLETE:"uncomplete"
}

let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
export const deleteTodo=id=>{
  return {
    type:"DELETE_TODO",
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}