import React from "react";
import ListsContext from '../../../ListsContext';
import TodoItem from '../TodoItem/TodoItem';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListGroup from 'react-bootstrap/ListGroup';


export const TodoItems = () => {
  const ListItems = () => {
    return (
      <ListsContext.Consumer>
        {context => (
          context.list.todos.map(item => {
            return (
              <TodoItem item={item} key={item.id} />
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