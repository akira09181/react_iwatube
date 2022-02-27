import React from "react";

import { makeStyles } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { FiLogOut } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));


const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <button className="logo">
                    <FaYoutube/>
                </button>
                <Typography variant="h5" className={classes.title}>Youtube App</Typography>
            <button className="logout" onClick={Logout()}>
                <FiLogOut></FiLogOut>
            </button>
            
            
            </Toolbar>
        </AppBar>
    )
}

export default NavBar