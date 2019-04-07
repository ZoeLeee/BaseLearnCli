import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers/todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import Footer from './components/Footer';

const store = createStore(todoApp);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Provider>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));