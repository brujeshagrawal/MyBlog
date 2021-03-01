import React, { Component } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './SideDrawer.css';

class SideDrawer extends Component{
    render(){
        return (
            <nav className={classes.SideDrawer}>
                <NavigationItems />
            </nav>
        );
    }
}

export default SideDrawer;