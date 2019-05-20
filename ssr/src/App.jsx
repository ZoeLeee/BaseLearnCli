import React from 'react';
import todoApp from './reducers/todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import Footer from './components/Footer';

const store = createStore(todoApp);

// export const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <h1>React SSR</h1>
//         <AddTodo />
//         <VisibleTodoList />
//         <Footer />
//       </div>
//     </Provider>
//   )
// };

export const App=()=><div>React SSR</div>