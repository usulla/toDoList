import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import TodoList from './TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
/* TODO: 
- 1. добавить сворачивание списка
- 2. добавить удаление списка
- 3. добавить переименование списка
- 4. сделать теги
- 5. добавить фон
- 6. фон из flickr или живые обои
- 7. добавить иконку
*/
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
const storageKey = "TODO_ITEMS";
const delayMs = 1000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
    this.addList = this.addList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }

  componentDidMount() {
    const todoItems = this.getFromStorage();
    /* Save to state */
    const initiaItems = [{
      id: Date.now(),
      title: 'Список дел',
      items: [
        {
          text: 'Купить продукты',
          status: false,
          key: Date.now()
        }]
    }];
    const initialLists = localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : initiaItems

    this.setState({
      lists: initialLists
    });
  }

  getFromStorage() {
    const fromStorage = localStorage.getItem(storageKey);
    return fromStorage ? JSON.parse(fromStorage) : [];
  }

  setLocalStorage(items) {
    //TODO:
    // const items = getFromStorage();
    // const newId = items.reduce((id, item) => (item.id >= id ? item.id + 1 : id), 1);
    // const updatedItems = [...items, { ...item, id: newId }];
    localStorage.setItem(storageKey, JSON.stringify(items));
  }
  addList() {
    var newList = {
      id: Date.now(),
      title: 'Новый список дел',
      items: []
    }
    this.setState(prevState => {
      return {
        lists: prevState.lists.concat(newList)
      }
    })
  }

  addItem(keyList, taskInput, e) {
    e.preventDefault();
    if (taskInput.current.value !== "") {
      /* Create new entry */
      var newItem = {
        text: taskInput.current.value,
        status: false,
        key: Date.now()
      }
      const updatedLists = this.state.lists.map(list => {
        return (
          list.id == keyList ? { ...list, items: list.items.concat(newItem) } : list
        )
      })
      /* Save to state */
      this.setState((prevState => {
        return {
          lists: updatedLists
        };
      }));
      /* Save to LocalStorage */
      setTimeout(() => {
        this.setLocalStorage(updatedLists);
      }, delayMs);
      /* Clear input for new task*/
      taskInput.current.value = "";
    }
  }
  deleteItem(keyList, keyItem) {
    const filteredItems = this.state.lists.map(list => {
      return (
        list.id == keyList ? { ...list, items: list.items.filter(item => item.key !== keyItem) } : list
      )
    })
    /* Save to state */
    this.setState({
      lists: filteredItems
    });
    localStorage.setItem(storageKey, JSON.stringify(filteredItems));
  }
  completeItem(keyList, key) {
    // NOTE: maybe const items =  getFromStorage();
    const filteredItems = this.state.lists.map(list => {
      return (
        list.id == keyList ? {
          ...list, items: list.items.map(item => {
            return (
              item.key == key ? { ...item, status: !item.status } : item
            )
          })
        } : list
      )
    })

    this.setState({
      lists: filteredItems
    });

    localStorage.setItem(storageKey, JSON.stringify(filteredItems));
  }

  render() {
    const lists = this.state.lists;
    return (
      <>
        <Button variant="primary" onClick={this.addList}>Add List</Button>
        <Title>Hello!</Title>
        <Wrapper>
          {lists.map(list => {
            return (
              <TodoList list={list} key={list.id} title={list.title} items={list.items} keyList={list.id} addItem={this.addItem} deleteItem={this.deleteItem} completeItem={this.completeItem} />
            )
          })}
        </Wrapper>
      </>
    )
  }
}

export default App;
