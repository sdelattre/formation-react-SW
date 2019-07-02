import React from 'react';
import './App.css';
import Task from './Task';

const tasks = [
        {id: 1, name: "Learn React", done: false},
        {id: 2, name: "Learn CSS", done: true},
        {id:3, name: "Web development", done: true}
    ];

    class App extends React.Component {
      constructor(props) {
        super(props);
    
        this.state = {
          tasks: tasks,
        };
      }

      click(id) {
        let tasks = this.state.tasks;
        let state = tasks[id].done;
        tasks[id].done = !state;
        this.setState(state => ({
          tasks: tasks
        }));
      }

      render() {
        return (
          <ul>
            {this.state.tasks.map(task => (
          <Task
            id={task.id}
            key={task.id}
            name={task.name}
            done={task.done} 
            click={this.click}/>
            ))}
          </ul>
       )};
}

export default App;
