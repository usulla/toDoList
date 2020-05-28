import React from "react";
import styles from './styles.module.scss';
import HeaderList from './HeaderList/HeaderList'
import TodoItems from './TodoItems/TodoItems';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const storageKey = "TODO_ITEMS";
const delayMs = 1000;

const TodoList = ({ lists, title, idList, updateListsState }) => {

  const taskInput = React.createRef();

  const saveTitleList = (newTitle) => {
    const renamedLists = lists.map(list => {
      return (
        list.id === idList ? { ...list, title: newTitle } : list
      )
    })
    /* Save to state */
    updateListsState(renamedLists);
    localStorage.setItem(storageKey, JSON.stringify(renamedLists));
  };

  const deleteList = () => {
    const filteredLists = lists.filter(list => list.id !== idList);
    /* Save to state */
    updateListsState(filteredLists);
    localStorage.setItem(storageKey, JSON.stringify(filteredLists));
  }
  const addItem = (taskInput, e) => {
    e.preventDefault();
    if (taskInput.current.value !== "") {
      /* Create new entry */
      var newItem = {
        text: taskInput.current.value,
        status: false,
        key: Date.now()
      }
      const updatedLists = lists.map(list => {
        return (
          list.id === idList ? { ...list, items: list.items.concat(newItem) } : list
        )
      })
      /* Save to state */
      updateListsState(updatedLists)
      /* Save to LocalStorage */
      setTimeout(() => {
        localStorage.setItem(storageKey, JSON.stringify(updatedLists));
      }, delayMs);
      /* Clear input for new task*/
      taskInput.current.value = "";
    }
  }

  return (
    <Card className={styles.card}>
      <CardContent>
        <HeaderList title={title} deleteList={deleteList} saveTitleList={saveTitleList} />
        {/* <Form onSubmit={addItem.bind(this, idList, taskInput)}> */}
        <Form onSubmit={(e) => addItem(taskInput, e)}>
          <FormGroup controlId="formAddItem">
            <InputGroup className="mb-3">
              <FormControl
                ref={taskInput}
                placeholder="enter task"
              />
              <InputGroup.Append>
                <Button type="submit" variant="contained" color="primary">
                  Add
                  </Button>
              </InputGroup.Append>
            </InputGroup>
          </FormGroup>
        </Form>
        <TodoItems />
      </CardContent>
    </Card>
  );
}

export default TodoList;