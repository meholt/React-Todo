import React from 'react';

import { data } from './components/data';
import './components/TodoComponents/Todo.css';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: data
    };
  }

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
          return task;
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({ tasks: this.state.tasks.filter(task => !task.completed) });
  };
  
  render() {
    return (
      <div className='App'>
        <div className='header'>
          Welcome to your to-do list!
        </div>
        <div className='todo-list'>
          <TodoList
              tasks={this.state.tasks}
              toggleTask={this.toggleTask}
              clearCompleted={this.clearCompleted}
          />

          <TodoForm addTask={this.addTask} />
        </div>
      </div>
    )
  }
};

export default App;
