import React, { useState, useEffect } from 'react';
import { ITodo } from '../interfaces';
import ListsContext from '../ListsContext'
import { TodoList } from '../components/TodoList/TodoList';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const storageKey: string = "TODO_ITEMS";
const Title = styled.h1`
  color:#000000;
  text-align:center;
  width:100%;
`;
export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const updateListsState = (newTodos: ITodo[]) => {
        setTodos(newTodos);
    }
    /* Save to state from lS*/
    useEffect(() => {
        const initialItems: ITodo[] = [{
            id: Date.now(),
            title: 'Список дел',
            todos: [
                {
                    id: Date.now(),
                    text: 'Купить продукты',
                    completed: false
                }]
        }];
        const lists = JSON.parse((localStorage.getItem(storageKey)) || JSON.stringify(initialItems)) as ITodo[]
        setTodos(lists)
    }, [])

    /* Update lS */
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(todos))
    }, [todos])

    const addList = (): void => {
        const newList: ITodo = {
            id: Date.now(),
            title: '',
            todos: []
        }
        setTodos(prev => prev.concat(newList))
    }

    const deleteTodo = (idList: string | number, idTodo: string | number): void => {
        const filteredTodos = todos.map(list => {
            return (
                list.id === idList ?
                    {
                        ...list, todos: list.todos.filter(todo => todo.id !== idTodo)
                    }
                    : list
            )
        })
        setTodos(filteredTodos)
    }

    const completedTodo = (idList: string | number, idTodo: string | number): void => {
        const completedTodos: any = todos.map(list => {
            return (
                list.id === idList ? {
                    ...list, todos: list.todos.map(todo => {
                        return (
                            todo.id === idTodo ?
                                { todo, completed: !todo.completed }
                                : todo
                        )
                    })
                } : list
            )
        })
        setTodos(completedTodos)
    }
    return (
        <>
            <Title>My happy todos</Title>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <Button onClick={addList}>Add list</Button>
            </div>
            {(todos.length === 0) &&
                <p className="center">While there is no business</p>
            }
            {todos.map(list => {
                return (
                    <ListsContext.Provider key={list.id} value={{
                        list: list,
                        deleteItem: deleteTodo,
                        completeItem: completedTodo
                    }}>
                        <TodoList idList={list.id} lists={todos} title={list.title} updateListsState={updateListsState} />
                    </ListsContext.Provider>
                )
            })}
        </>
    )
}
