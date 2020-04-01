import React, { Component } from "react";
import TodoItems from './TodoItems/TodoItems';
import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Title = styled.h2`
  color:#000000;
`;
const ToDoList = styled.div`
  margin: 35px 50px;
`;
const storageKey = "TODO_ITEMS";
const delayMs = 1000;
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.taskInput = React.createRef();

    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage(items) {
    //TODO:
    // const items = getFromStorage();
    // const newId = items.reduce((id, item) => (item.id >= id ? item.id + 1 : id), 1);
    // const updatedItems = [...items, { ...item, id: newId }];
    localStorage.setItem(storageKey, JSON.stringify(items));
  }

 

  render() {
    const title = this.props.title,
      keyList = this.props.keyList;
    return (
      <ToDoList>
        <Title>{title}</Title>
        <div className="header">
          <Form onSubmit={this.props.addItem.bind(this, keyList, this.taskInput)}>
            <FormGroup controlId="formAddItem">
              <InputGroup className="mb-3">
                <FormControl
                  ref={this.taskInput}
                  placeholder="enter task"
                />
                <InputGroup.Append>
                  <Button type="submit" variant="primary">Add</Button>
                </InputGroup.Append>
              </InputGroup>
            </FormGroup>
          </Form>
        </div>
        <TodoItems keyList={keyList} entries={this.props.items} delete={this.props.deleteItem} complete={this.props.completeItem} />
      </ToDoList>
    );
  }
}

export default TodoList;