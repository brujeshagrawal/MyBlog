import React, { Component } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

class NavigationItems extends Component{
    render(){
        return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link='/'>Posts</NavigationItem>
                <NavigationItem link='/new-post'>New Post</NavigationItem>
            </ul>
        );
    }
}

export default NavigationItems;