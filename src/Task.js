import React from 'react';
import './App.css';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.click(this.props.id);
    }

    render() {
        let render;
        if (this.props.done){
            render = <strike><li><div onClick={this.handleClick}>{this.props.name}</div></li></strike>;
        } else {
            render = <li><div onClick={this.handleClick}>{this.props.name}</div></li>;
        }
        return (
            <div>{render}</div>
      )
    }
}

export default Task;