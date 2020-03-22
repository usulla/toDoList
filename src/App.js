import React from 'react';
import styled from 'styled-components'
import './App.css';
import TodoList from './TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = styled.h1`
  color:#000000;
`;
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
`;

function App() {
  return (
    <Wrapper>
        <Title>Hello!</Title>
        <TodoList/>
    </Wrapper>
  );
}

export default App;
