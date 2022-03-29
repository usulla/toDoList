import React from 'react';
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const Title = styled.h4`
  color:#000000;
  text-align:center;
  width:100%;
  font-size:1.4rem;
  text-transform:uppercase;
`;
const Link = styled.a`
    color:#fff;
    text-decoration:none;
    &:hover{
        color:#fff;
        text-decoration:none;
    }
`;
export const PostView = ({ post }) => {
    return (
        <Card style={{
            width: '40%',
            position: 'fixed',
            right: '5%',
            top: '20%'
        }}>
            {Object.keys(post).length !== 0 && (
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Title>{post.title}</Title>
                    <div>{post.selftext}</div>
                    <br />
                    <Button type="submit" variant="contained" color="primary">
                        <Link href={post.url} target="_blank">GO TO READ POST</Link>
                    </Button>
                </CardContent>
            )}
        </Card>
    )
}