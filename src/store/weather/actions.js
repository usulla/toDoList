import { GET_WEATHER_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE, OPEN_POST } from '../types'

export const openPost = (postID) => {
    return {
        type: OPEN_POST,
        payload: postID
    }
}
export const getWeather = (url) => {
    return dispatch => {
        dispatch({
            type: GET_WEATHER_REQUEST
        })
        try {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    dispatch({
                        type: GET_NEWS_SUCCESS,
                        payload: {
                            posts: json.data.children.map(post => post.data)
                        }
                    })
                })
                .catch(error =>
                    dispatch({
                        type: GET_NEWS_FAILURE,
                        payload: error
                    })
                )
        }
        catch (error) {
            dispatch({
                type: GET_NEWS_FAILURE,
                payload: error
            })
        }
    }
}