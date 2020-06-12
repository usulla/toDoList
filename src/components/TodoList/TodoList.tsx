import React, { useRef } from "react";
import RootRef from '@material-ui/core/RootRef';
import styles from './styles.module.scss';
import HeaderList from './HeaderList/HeaderList'
import {TodoItems} from './TodoItems/TodoItems.js';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { ITodo, T } from '../../interfaces';

type TodoListProps = {
  lists: ITodo[]
  title: string
  idList: string | number
  updateListsState: (newTodos: ITodo[]) => void
}

export const TodoList: React.FC<TodoListProps> = ({ lists, title, idList, updateListsState }) => {
  const taskInput = useRef<HTMLInputElement>(null);

  const saveTitleList = (newTitle: string): void => {
    const renamedLists = lists.map(list => {
      return (
        list.id === idList ? { ...list, title: newTitle } : list
      )
    })
    /* Save to state */
    updateListsState(renamedLists);
  };

  const deleteList = (): void => {
    const filteredLists = lists.filter(list => list.id !== idList);
    /* Save to state */
    updateListsState(filteredLists);
  }
  const addItem = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (taskInput.current!.value !== "") {
      /* Create new entry */
      const newItem: T = {
        id: Date.now(),
        text: taskInput.current!.value,
        completed: false
      }
      const updatedLists = lists.map(list => {
        return (
          list.id === idList ? { ...list, todos: list.todos.concat(newItem) } : list
        )
      })
      /* Save to state */
      updateListsState(updatedLists)
      /* Clear input for new task*/
      taskInput.current!.value = "";
    }
  }
  return (
    <Card className={styles.card}>
      <CardContent>
        <HeaderList title={title} deleteList={deleteList} saveTitleList={saveTitleList} />
        {/* <Form onSubmit={addItem.bind(this, idList, taskInput)}> */}
        <Form onSubmit={(event: any): void => addItem(event)}>
          <FormGroup controlId="formAddItem">
            <InputGroup className="mb-3">
              <>
                <RootRef rootRef={taskInput}>
                  <FormControl
                    placeholder="enter task"
                  />
                </RootRef>
                <InputGroup.Append>
                  <Button type="submit" variant="contained" color="primary">
                    Add
                  </Button>
                </InputGroup.Append>
              </>
            </InputGroup>
          </FormGroup>
        </Form>
        <TodoItems />
      </CardContent>
    </Card>
  );
}