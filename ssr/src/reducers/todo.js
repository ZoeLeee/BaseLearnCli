import { combineReducers } from "redux";
import { VisibilityFilters } from "../actions";


const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'DELETE_TODO':
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          state.splice(i, 1);
        }
      }
      return [...state];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter
    default:
      return state
  }
}

export default combineReducers({
  todos,visibilityFilter
})