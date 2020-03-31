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
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.getFromStorage = this.getFromStorage.bind(this);
  }
  
  componentDidMount() {
    const todoItems = this.getFromStorage();
    /* Save to state */
    this.setState({
      items: todoItems
    });
  }

  setLocalStorage(items) {
    //TODO:
    // const items = getFromStorage();
    // const newId = items.reduce((id, item) => (item.id >= id ? item.id + 1 : id), 1);
    // const updatedItems = [...items, { ...item, id: newId }];
    localStorage.setItem(storageKey, JSON.stringify(items));
  }

  getFromStorage() {
    const fromStorage = localStorage.getItem(storageKey);
    return fromStorage ? JSON.parse(fromStorage) : [];
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      /* Create new entry */
      var newItem = {
        text: this._inputElement.value,
        status: false,
        key: Date.now()
      }
      /* Save to state */
      this.setState((prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      }));
      /* Save to LocalStorage */
      setTimeout(() => {
        this.setLocalStorage(this.state.items);
      }, delayMs);
      /* Clear input for new task*/
      this._inputElement.value = "";
    }
    e.preventDefault();
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
    localStorage.setItem(storageKey, JSON.stringify(filteredItems));
  }

  completeItem(key) {
    // NOTE: maybe const items =  getFromStorage();
    const filteredItems = this.state.items.map(item => {
      return (
        item.key == key ? { ...item, status: !item.status } : item
      )
    })
    this.setState({
      items: filteredItems
    });
    localStorage.setItem(storageKey, JSON.stringify(filteredItems));
  }

  render() {
    const title = this.props.title;
    return (
      <ToDoList>
        <Title>{title}</Title>
        <div className="header">
          <Form onSubmit={this.addItem}>
            <FormGroup controlId="formAddItem">
              <InputGroup className="mb-3">
                <FormControl
                  ref={(a) => this._inputElement = a}
                  placeholder="enter task"
                />
                <InputGroup.Append>
                  <Button type="submit" variant="primary">Add</Button>
                </InputGroup.Append>
              </InputGroup>
            </FormGroup>
          </Form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} complete={this.completeItem} />
      </ToDoList>
    );
  }
}

export default TodoList;