import { connect } from 'react-redux'
import { deleteTodo, toggleTodo, VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList';


function filterTodos(todos, type) {
  switch (type) {
    case VisibilityFilters.SHOW_COMPLETE:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_UNCOMPLETE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;

  }
}


const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos,state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch(deleteTodo(id))
    },
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);