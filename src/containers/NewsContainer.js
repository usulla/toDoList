import React from 'react';
import { connect } from 'react-redux'
import { openPost } from '../store/news/actions'
import { NewsPage } from '../pages/NewsPage'

const NewsContainer = (props) => {
    const { posts, isFetching, error, openPost, fullPost } = props
    return (
        <NewsPage posts={posts} isFetching={isFetching} error={error} openPost={openPost} fullPost={fullPost} />
    )
}
const mapStateToProps = (store) => {
    return ({
        posts: store.news.posts,
        isFetching: store.news.isFetching,
        error: store.news.error,
        fullPost: store.news.fullPost
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        openPost: (id) => dispatch(openPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)