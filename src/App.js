import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import TodoList from './TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Title = styled.h1`
  color:#000000;
  text-align:center;
`;
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap:wrap;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          id: 1,
          title: 'Список дел'
        }
      ]
    };
    this.addList = this.addList.bind(this);
  }
  addList() {
    var newList = {
      id: Date.now(),
      title: 'New ToDo list'
    }
    this.setState(prevState => {
      return {
        lists: prevState.lists.concat(newList)
      }
    })
  }

  render() {
    const lists = this.state.lists;
    return (
      <>
        <Button variant="primary" onClick={this.addList}>Add List</Button>
        <Title>Hello!</Title>
        <Wrapper>
          {lists.map(item => {
            return (
              <TodoList key={item.id} title={item.title} />
            )
          })}
        </Wrapper>
      </>
    )
  }
}

export default App;
