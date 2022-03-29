import React from 'react';
import { connect } from 'react-redux'
import { createList, deleteList, deleteTodo, renameList, completedTodo, addTodo } from '../store/todos/actions'
import TodosPage from '../pages/TodosPage.tsx'

const TodosContainer = (props) => {
    const { lists, createList, deleteTodo, completedTodo, addTodo, deleteList, renameList } = props
    return (
        <TodosPage
            lists={lists}
            createList={createList}
            deleteTodo={deleteTodo}
            completedTodo={completedTodo}
            addTodo={addTodo}
            deleteList={deleteList}
            renameList={renameList}
        />
    )
}

const mapStateToProps = (store) => {
    return {
        lists: store.lists.lists
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createList: (newList) => dispatch(createList(newList)),
        deleteTodo: (idList, idTodo) => dispatch(deleteTodo(idList, idTodo)),
        completedTodo: (idList, idTodo) => dispatch(completedTodo(idList, idTodo)),
        addTodo: (idList, todo) => dispatch(addTodo(idList, todo)),
        deleteList: (idList) => dispatch(deleteList(idList)),
        renameList: (idList, title) => dispatch(renameList(idList, title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)