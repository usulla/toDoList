import React, { Component } from "react";
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const liStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}
class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item,
      keyList = this.props.keyList;
    const CheckButton = () => {
      return (
        !item.status ?
          <RadioButtonUncheckedIcon onClick={() => this.props.complete(keyList, item.key)} />
          :
          <CheckCircleOutlineIcon style={{ color: 'green' }} onClick={() => this.props.complete(keyList, item.key)} />
      )
    }
    return (
      <ListGroupItem as="li" style={liStyle} className={item.status ? styles.disabled : null}>
        <CheckButton />
        <span className={styles.text}>{item.text}</span>
        <DeleteForeverIcon onClick={() => this.props.delete(keyList, item.key)} />
      </ListGroupItem>
    );
  }
}

export default TodoItem;