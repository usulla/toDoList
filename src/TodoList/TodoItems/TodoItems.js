import React, { Component } from "react";
import TodoItem from '../TodoItem/TodoItem';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListGroup from 'react-bootstrap/ListGroup';


class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return <TodoItem keyList={this.props.keyList} key={item.key} item={item} delete={this.props.delete} complete={this.props.complete} />
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