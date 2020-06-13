import React, { useRef } from "react";
import RootRef from '@material-ui/core/RootRef';
// import styles from './styles.module.scss';
import { connect } from 'react-redux'
import HeaderList from './HeaderList/HeaderList'
import { TodoItems } from './TodoItems/TodoItems.js';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { ITodo, T } from '../../interfaces';
import { addTodo, deleteList, renameList } from '../../store/actions'

type TodoListProps = {
  title: string
  idList: string | number
  addTodo: (idList: number | string, todo: ITodo) => void
  deleteList: (idList: number | string) => void
  renameList: (idList: number | string, title: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { title, idList } = props
  const taskInput = useRef<HTMLInputElement>(null);

  const addItem = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (taskInput.current!.value !== "") {
      /* Create new entry */
      const newItem: any = {
        id: Date.now(),
        text: taskInput.current!.value,
        completed: false
      }
      props.addTodo(idList, newItem)
      /* Clear input for new task*/
      taskInput.current!.value = "";
    }
  }
  return (
    <Card style={{ margin: '35px 40px',maxWidth:'320px', width:'320px'}}>
      <CardContent>
        <HeaderList idList={idList} title={title}
          deleteList={() => props.deleteList(idList)}
          saveTitleList={(idList, title) => props.renameList(idList, title)} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (idList: any, todo: any) => dispatch(addTodo(idList, todo)),
    deleteList: (idList: any) => dispatch(deleteList(idList)),
    renameList: (idList: any, title) => dispatch(renameList(idList, title))
  }
}

export default connect(null, mapDispatchToProps)(TodoList)