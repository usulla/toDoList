import React from "react";
import ListsContext from '../../../ListsContext';
import TodoItem from '../TodoItem/TodoItem';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListGroup from 'react-bootstrap/ListGroup';


const TodoItems = ({ completeItem, deleteItem }) => {
  const ListItems = () => {
    return (
      <ListsContext.Consumer>
        {list => (
          list.items.map(item => {
            return (
              <TodoItem item={item} keyList={list.id} key={item.key} deleteItem={deleteItem} completeItem={completeItem} />
            )
          })
        )}
      </ListsContext.Consumer>
    )
  }
  // const listItems = todoEntries.map(this.createTasks);
  return (
    <ListGroup as="ul" className="todo-list">
      <ListItems />
    </ListGroup>
  );
}

export default TodoItems;