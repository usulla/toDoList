import React from 'react';
import { ITodo } from '../interfaces';
import ListsContext from '../ListsContext'
import TodoList from '../components/TodoList/TodoList';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const Title = styled.h1`
  color:#000000;
  text-align:center;
  width:100%;
  font-size:2rem;
`;

const TodosPage: React.FC<any> = (props) => {
    const { lists, createList, deleteTodo, completedTodo, addTodo, deleteList, renameList } = props
    const addList = (): void => {
        const newList: ITodo = {
            id: Date.now(),
            title: '',
            todos: []
        }
        createList(newList)
    }

    return (
        <>
            <Title>HAPPY TODOS</Title>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addList}>
                    Add list
                </Button>
            </div>
            {(lists.length === 0) &&
                <p className="center">While there is no business</p>
            }
            {lists.map(list => {
                return (
                    <ListsContext.Provider
                        key={list.id}
                        value={{
                            list: list,
                            deleteItem: deleteTodo,
                            completeItem: completedTodo
                        }}>
                        <TodoList idList={list.id}
                            title={list.title}
                            addTodo={addTodo}
                            deleteList={deleteList}
                            renameList={renameList} />
                    </ListsContext.Provider>
                )
            })}
        </>
    )
}

export default TodosPage;
