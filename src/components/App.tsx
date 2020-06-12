import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar/SideBar';
import { TodosPage } from '../pages/TodosPage';
import { WetherPage } from '../pages/WetherPage';
/* TODO: 
- 1. добавить сворачивание списка
+ 2. добавить удаление списка
+ 3. добавить переименование списка
- 4. сделать теги
+ 5. добавить фон
- 6. фон из flickr или живые обои
- 7. добавить иконку
*/
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap:wrap;
`;

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Wrapper>
          <Switch>
            <Route component={TodosPage} path='/' exact />
            <Route component={WetherPage} path='/wether' />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </>
  )
}
