import React from 'react';
import './App.css';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import {Provider} from './context'


function App() {
  return (
    <Provider>
    <div className="app-container">
      <Header />
      <AddTodo />
      <Todos />
    </div>
    </Provider>
);
}

export default App;
