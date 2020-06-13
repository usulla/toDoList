import { CREATE_LIST, DELETE_LIST, RENAME_LIST, INIT, ADD_TODO, DELETE_TODO, COMPLETED_TODO } from './types'

const initialLists = {
    lists: [{
        id: Date.now(),
        title: 'Дела на сегодня',
        todos: [
            {
                id: Date.now(),
                text: 'Купить продукты',
                completed: false
            }
        ]
    }]
}

const stateFromLocalStorage = JSON.parse((localStorage.getItem('TODO_ITEMS')))
const initialState = stateFromLocalStorage ? { lists: stateFromLocalStorage } : initialLists

export const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return { ...state, lists: action.payload }
        case CREATE_LIST:
            return {
                ...state,
                // ...state.concat([action.payload])
                lists: state.lists.concat([action.payload])
            }
        case DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload)
            }
        case RENAME_LIST:
            return {
                ...state,
                lists: state.lists.map(list => {
                    return (
                        list.id === action.payload.idList ? {
                            ...list, title: action.payload.title
                        } : list
                    )
                })
            }
        case ADD_TODO:
            return {
                ...state,
                lists: state.lists.map(list => {
                    return (
                        list.id === action.payload.idList ? {
                            ...list,
                            todos: list.todos.concat(action.payload.todo)
                        } : list
                    )
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                lists: state.lists.map(list => {
                    return (
                        list.id === action.payload.idList ? {
                            ...list,
                            todos: list.todos.filter(todo => todo.id !== action.payload.idTodo)
                        }
                            : list
                    )
                })
            }
        case COMPLETED_TODO:
            return {
                ...state,
                lists: state.lists.map(list => {
                    return (
                        list.id === action.payload.idList ? {
                            ...list,
                            todos: list.todos.map(todo => {
                                return (
                                    todo.id === action.payload.idTodo ? {
                                        ...todo, completed: !todo.completed
                                    }
                                        : todo
                                )
                            })
                        }
                            : list
                    )
                })
            }

        default: return state
    }
}