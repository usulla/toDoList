import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return <ListGroupItem as="li" key={item.key} onClick={() => this.delete(item.key)} >{item.text}</ListGroupItem>
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return (
      <ListGroup as="ul" className="todo-list">
        {listItems}
      </ListGroup>
    );
  }
}

export default TodoItems;