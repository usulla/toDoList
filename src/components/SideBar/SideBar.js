import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        margin: '20px'
    },
});
const SideBar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen((prevOpen) => !prevOpen);
    };
    return (
        <>
            <IconButton className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor={"left"}
                open={open}
            // onClose={toggleDrawer(anchor, false)}
            // onOpen={toggleDrawer(anchor, true)}
            >
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    {/* <List>
                        {lists.map((list, index) => (
                            <ListItem button key={list.id}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={list.title} onClick={list.action} />
                            </ListItem>
                        ))}
                    </List> */}
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <NavLink to="/">Todo lisr</NavLink>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <NavLink to="/wether">Wether</NavLink>
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            </SwipeableDrawer>
        </>
    )
}

export default SideBar;