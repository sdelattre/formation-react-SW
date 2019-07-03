import React from 'react';
import './App.css';
import Task from './Task';
import { connect } from 'react-redux';
import { changeTaskState } from "./actions/tasks"

class App extends React.Component {
      click(id) {
        this.props.changeTaskState(id);
      }

      render() {
        return (
          <ul>
            {this.props.tasks.list.map(task => (
          <Task
            id={task.id}
            key={task.id}
            name={task.name}
            done={task.done} 
            click={this.click.bind(this)}/>
            ))}
          </ul>
       )};
}

const mapStateToProps = state => {
  return { tasks: state.tasks }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTaskState: (id) => dispatch(changeTaskState(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
