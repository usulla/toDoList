import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:50vh;
`;
export const Loading = () => {
    return (
        <Container>
            <CircularProgress />
        </Container>
    )
}