import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menu: {
    zIndex: 1,
  },
}));

const MenuOfList = ({ deleteList, renameList, idList }) => {
  const classes = useStyles();
  //NOTE: разобраться с хуком React.useRef
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <IconButton
        ref={anchorRef}
        onClick={handleToggleMenu}
      >
        <MoreHorizIcon />
      </IconButton>
      <Popper className={classes.menu} open={open} anchorEl={anchorRef.current} placement='bottom-end' transition>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper >
              <ClickAwayListener onClickAway={handleToggleMenu}>
                <MenuList onClose={handleToggleMenu} autoFocusItem={open}>
                  <MenuItem onClick={() => { handleToggleMenu(); renameList('') }}>Rename list</MenuItem>
                  <MenuItem onClick={() => { deleteList() }}>Delete list</MenuItem>
                  <MenuItem onClick={handleToggleMenu}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default MenuOfList;