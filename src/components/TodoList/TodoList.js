import React, { Component } from "react";
import ListsContext from '../../ListsContext'
import styles from './styles.module.scss';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuList from '../MenuList/MenuList';
import TodoItems from './TodoItems/TodoItems';
import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Title = styled.h2`
  color:#000000;
`;
const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
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
      deleteList = this.props.deleteList;

    return (
      <Card className={styles.card}>
        <ListsContext.Consumer>
          {list => (
            <CardContent>
              <Header>
                <Typography variant="h4" component="h2" gutterBottom>
                  {title}
                </Typography>
                <IconButton
                  onClick={() => deleteList(list.id)}
                >
                  <MoreHorizIcon />
                </IconButton>
                <MenuList />
              </Header>
              <Form onSubmit={this.props.addItem.bind(this, list.id, this.taskInput)}>
                <FormGroup controlId="formAddItem">
                  <InputGroup className="mb-3">
                    <FormControl
                      ref={this.taskInput}
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
              <TodoItems delete={this.props.deleteItem} complete={this.props.completeItem} />
            </CardContent>
          )}
        </ListsContext.Consumer>
      </Card>
    );
  }
}

export default TodoList;