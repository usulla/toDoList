import React from 'react';
import { ITodo } from './interfaces';

const initialTodos: any = [{
  id: Date.now(),
  title: 'Список дел',
  todos: [
    {
      id: Date.now(),
      text: 'Купить продукты',
      completed: false
    }]
}];

const ListsContext = React.createContext(initialTodos);

export default ListsContext;