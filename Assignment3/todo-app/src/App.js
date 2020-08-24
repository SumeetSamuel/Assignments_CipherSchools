import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList';

class App extends Component {
  

  render() {
    return (
      <div>
        <Header/>
        <TodoList/>
      </div>
    )
  }
}

export default App

