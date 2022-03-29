import { CREATE_LIST, DELETE_LIST, RENAME_LIST, ADD_TODO, DELETE_TODO, COMPLETED_TODO } from '../types.js'
// List
export const createList = (initialList) => {
    return {
        type: CREATE_LIST,
        payload: initialList
    }
}

export const deleteList = (id) => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}
export const renameList = (idList, title) => {
    return {
        type: RENAME_LIST,
        payload: { idList, title }
    }
}

// Todo
export const addTodo = (idList, todo) => {
    return {
        type: ADD_TODO,
        payload: { idList, todo }
    }
}
export const deleteTodo = (idList, idTodo) => {
    return {
        type: DELETE_TODO,
        payload: { idList, idTodo }
    }
}
export const completedTodo = (idList, idTodo) => {
    return {
        type: COMPLETED_TODO,
        payload: { idList, idTodo }
    }
}

