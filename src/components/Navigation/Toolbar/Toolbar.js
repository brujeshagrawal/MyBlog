import React, { Component } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.css';

class Toolbar extends Component{
    render(){
        return (
            <header className={classes.Toolbar}>
                <div className={classes.DisplayToggle} style={{ height: '60%'}}>
                    <DrawerToggle clicked={this.props.clickedMenu} />
                </div>
                <div>Logo</div>
                <nav className={classes.DisplayNav}>
                    <NavigationItems />
                </nav>
            </header>
        );
    }
}

export default Toolbar;