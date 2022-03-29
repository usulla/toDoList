import React from 'react';
import styled from 'styled-components'
import { NewsCard } from 'components/News/NewsCard';
import { PostView } from 'components/News/PostView';
import { Loading } from 'components/Loading';

const Title = styled.h1`
  color:#000000;
  text-align:center;
  width:100%;
  font-size:2rem;
  text-transform:uppercase;
`;
const ListOfNewsPreview = styled.div`
  width:40%;
  max-height:300px;
`;
const ContentWrapper =  styled.div`
  // display:flex;
  // flex-direction:row;
  // justify-content:space-around;
`

const ListOfNews = (posts, openPost) => {
  return (
    <ListOfNewsPreview>
      {
        posts.map(post => {
          return (
            <NewsCard post={post} key={post.title} openPost={openPost} />
          )
        })
      }
    </ListOfNewsPreview>
  )
}
const TemplateList = (posts, isFetching, error, openPost, fullPost) => {
  if (isFetching) {
    return <Loading />
  }
  if (error) return <div>{error}</div>
  if (posts.length !== 0) {
    return ListOfNews(posts, openPost)
  }
}
export const NewsPage = ({ posts, isFetching, error, openPost, fullPost }) => {
  return (
    <>
      <Title>News</Title>
      <ContentWrapper>
        {
          TemplateList(posts, isFetching, error, openPost, fullPost)
        }
        <PostView post={fullPost} />
      </ContentWrapper>
    </>
  )
}