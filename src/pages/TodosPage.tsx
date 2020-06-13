import React, { useState, useEffect } from 'react';
import { ITodo } from '../interfaces';
import ListsContext from '../ListsContext'
import TodoList from '../components/TodoList/TodoList';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { createList, deleteList, initLoad, deleteTodo, completedTodo } from '../store/actions'
import { STORAGE_KEY } from '../store/types.js'
const storageKey: string = "TODO_ITEMS";
const Title = styled.h1`
  color:#000000;
  text-align:center;
  width:100%;
  font-size:2rem;
`;
const TodosPage: React.FC<any> = (props) => {
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
        const lists = JSON.parse((localStorage.getItem(STORAGE_KEY)) || JSON.stringify(initialItems)) as ITodo[]
        props.initLoad(lists)
    }, [])

    /* Update lS */
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(props.lists))
    }, [props.lists])

    const addList = (): void => {
        const newList: ITodo = {
            id: Date.now(),
            title: '',
            todos: []
        }
        props.createList(newList)
    }

    const deleteTodo = (idList: string | number, idTodo: string | number): void => {
        props.deleteTodo(idList, idTodo)
    }

    const completedTodo = (idList: string | number, idTodo: string | number): void => {
        props.completedTodo(idList, idTodo)
    }
    return (
        <>
            <Title>HAPPY TODOS</Title>
            <div style={{ width: '100%', textAlign: 'center', marginTop:'20px' }}>
                <Button variant="contained" color="primary" onClick={addList}>Add list</Button>
            </div>
            {(props.lists.length === 0) &&
                <p className="center">While there is no business</p>
            }
            {props.lists.map(list => {
                return (
                    <ListsContext.Provider key={list.id} value={{
                        list: list,
                        deleteItem: deleteTodo,
                        completeItem: completedTodo
                    }}>
                        <TodoList idList={list.id} title={list.title} />
                    </ListsContext.Provider>
                )
            })}
        </>
    )
}
const mapStateToProps = (store: any): any => {
    return {
        lists: store.lists.lists
    }
}
const mapDispatchToProps = (dispatch: any): any => {
    return {
        createList: (newList: any) => dispatch(createList(newList)),
        deleteList: (id: string | number) => dispatch(deleteList(id)),
        initLoad: (lists) => dispatch(initLoad(lists)),
        deleteTodo: (idList, idTodo) => dispatch(deleteTodo(idList, idTodo)),
        completedTodo: (idList, idTodo) => dispatch(completedTodo(idList, idTodo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage)
