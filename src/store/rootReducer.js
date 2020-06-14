import { combineReducers } from 'redux'
import { listsReducer as lists } from './todos/reducer'
import { newsReducer as news } from './news/reducer'

export const rootReducer = combineReducers({
    lists,
    news
})