import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE, OPEN_POST } from '../types'

const initialState = {
    isFetching: false,
    error: '',
    countPost: 6,
    posts: [],
    fullPost:{}
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_REQUEST:
            return { ...state, isFetching: true }
        case GET_NEWS_SUCCESS:
            return { ...state, isFetching: false, posts: action.payload.posts }
        case GET_NEWS_FAILURE:
            return { ...state, isFetching: false, error: action.payload }
        case OPEN_POST:
            return {
                ...state,
                fullPost: state.posts.filter(post => post.id === action.payload)[0]
            }
        default: return state
    }
}