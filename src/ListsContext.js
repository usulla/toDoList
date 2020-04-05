import React from 'react';

const initialItems = [{
  id: Date.now(),
  title: 'Список дел',
  items: [
    {
      text: 'Купить продукты',
      status: false,
      key: Date.now()
    }]
}];

const ListsContext = React.createContext(initialItems);

export default ListsContext;