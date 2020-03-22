import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import TodoItems from '../TodoItems/TodoItems';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }

      this.setState((prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      }));

      this._inputElement.value = "";
    }
    e.preventDefault();
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
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
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;