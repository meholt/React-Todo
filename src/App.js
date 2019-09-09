import React from 'react';

import todos from './tasks';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
state
  constructor() {
    super();
    this.state = {
      todos
    }
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo List!</h2>
        <h3>Get It Done:</h3>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
