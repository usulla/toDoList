import React from "react";
import styles from './styles.module.scss';
import ListsContext from '../../../ListsContext';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


const liStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const TodoItem = ({ item }) => {

  const CheckButton = () => {
    return (
      <ListsContext.Consumer>
        {context => (
          !item.completed ?
            <RadioButtonUncheckedIcon onClick={() => context.completeItem(context.list.id, item.id)} />
            :
            <CheckCircleOutlineIcon style={{ color: 'green' }} onClick={() => context.completeItem(context.list.id, item.id)} />
        )}
      </ListsContext.Consumer>
    )
  }
  return (
    <ListGroupItem as="li" style={liStyle} className={item.completed ? styles.disabled : null}>
      <CheckButton />
      <span className={styles.text}>{item.text}</span>
      <ListsContext.Consumer>
        {context => (
          <DeleteForeverIcon onClick={() => context.deleteItem(context.list.id, item.id)} />
        )
        }
      </ListsContext.Consumer>
    </ListGroupItem>
  );
}


export default TodoItem
