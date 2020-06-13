import React from 'react';
import { ITodo } from '../interfaces';
import ListsContext from '../ListsContext'
import TodoList from '../components/TodoList/TodoList';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { createList, initLoad, deleteTodo, completedTodo } from '../store/actions'
const Title = styled.h1`
  color:#000000;
  text-align:center;
  width:100%;
  font-size:2rem;
`;
const TodosPage: React.FC<any> = (props) => {

    const addList = (): void => {
        const newList: ITodo = {
            id: Date.now(),
            title: '',
            todos: []
        }
        props.createList(newList)
    }

    return (
        <>
            <Title>HAPPY TODOS</Title>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={addList}>Add list</Button>
            </div>
            {(props.lists.length === 0) &&
                <p className="center">While there is no business</p>
            }
            {props.lists.map(list => {
                return (
                    <ListsContext.Provider key={list.id} value={{
                        list: list,
                        deleteItem: props.deleteTodo,
                        completeItem: props.completedTodo
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
        initLoad: (lists) => dispatch(initLoad(lists)),
        deleteTodo: (idList, idTodo) => dispatch(deleteTodo(idList, idTodo)),
        completedTodo: (idList, idTodo) => dispatch(completedTodo(idList, idTodo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage)
