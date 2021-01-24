import React from 'react'
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';



const Header = () => {
    return(
        <div className="header">
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" gutterBottom>
                    Tasks
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;


