import React from "react";
import styles from './styles.module.scss';
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

const TodoItem = ({ item, keyList, completeItem, deleteItem }) => {

  const CheckButton = () => {
    return (
      !item.status ?
        <RadioButtonUncheckedIcon onClick={() => completeItem(keyList, item.key)} />
        :
        <CheckCircleOutlineIcon style={{ color: 'green' }} onClick={() => completeItem(keyList, item.key)} />
    )
  }
  return (
    <ListGroupItem as="li" style={liStyle} className={item.status ? styles.disabled : null}>
      <CheckButton />
      <span className={styles.text}>{item.text}</span>
      <DeleteForeverIcon onClick={() => deleteItem(keyList, item.key)} />
    </ListGroupItem>
  );
}

export default TodoItem;
