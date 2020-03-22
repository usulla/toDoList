import React, { Component } from "react";
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    const item = this.props.item;
    return (
      <ListGroupItem as="li" key={item.key} onClick={() => this.delete(item.key)} >
        {item.text}
      </ListGroupItem>
    );
  }
}

export default TodoItem;