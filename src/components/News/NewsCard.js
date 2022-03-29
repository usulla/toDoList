import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: inline-block;
  overflow: scroll; 
  margin: 5px 5%; 
  width: 100%
`;
const Title = styled.h6`
    padding-left: 20px;
`;
export const NewsCard = ({ post, openPost }) => {
    return (
        <CardWrapper onClick={() => openPost(post.id)}>
            <Card style={{ height: '120px' }}>
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {!post.thumbnail || post.thumbnail === 'default' || post.thumbnail === 'self' ? false :
                        <CardActionArea style={{ width: '80px' }}>
                            <CardMedia
                                style={{ height: "80px", width: "80px" }}
                                image={post.thumbnail}
                                title={post.title}
                            />
                        </CardActionArea>
                    }
                    <Title>{post.title}</Title>
                    {/* {post.selftext} */}
                </CardContent>
            </Card>
        </CardWrapper>
    )
}