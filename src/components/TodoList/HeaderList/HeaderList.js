import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import MenuOfList from '../../MenuOfList/MenuOfList';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:10px;
`;
const HeaderList = ({ title, deleteList, saveTitleList }) => {
  const [titleOfList, setTitle] = React.useState(title);
  const titleInput = React.createRef();

  const renameList = (e) => {
    setTitle(titleInput.current.value)
    saveTitleList(titleInput.current.value)
    e.preventDefault()
  };

  return (
    <Header>
      {titleOfList.trim().length !== 0 &&
        <Typography variant="h5" component="h2" gutterBottom>
          {titleOfList}
        </Typography>
      }
      {titleOfList.trim().length === 0 &&
        <>
          <TextField style={{ marginBottom: '20px' }}
            label="Title"
            inputRef={titleInput}
            id="outlined-size-small"
            // defaultValue="Enter title of list"
            size="small" />
          <IconButton onClick={renameList}>
            <CheckIcon />
          </IconButton>
        </>
      }
      <MenuOfList deleteList={deleteList} renameList={setTitle} />
    </Header>
  )
}

export default HeaderList;