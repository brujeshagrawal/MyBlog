import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

class NavigationItems extends Component{
    render(){
        return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link='/posts'>Posts</NavigationItem>
                { localStorage.getItem('MyBlog_token') ?
                     <Aux>
                        <NavigationItem link='/new-post'>New Post</NavigationItem>
                        <NavigationItem link='/logout'>Logout</NavigationItem>
                     </Aux> : 
                    <Aux>
                        <NavigationItem link='/signup'>Signup</NavigationItem>
                        <NavigationItem link='/login'>Login</NavigationItem>
                    </Aux> 
                }
            </ul>
        );
    }
}

export default NavigationItems;