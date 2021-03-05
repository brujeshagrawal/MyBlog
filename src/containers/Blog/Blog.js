import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';

import classes from './Blog.css';

class Blog extends Component{
    
    render(){
        return (
            <div className={classes.Blog}>

                <Switch>
                    <Route path='/posts' component={Posts} />
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/login' component={Login} />
                    <Redirect from='/' to='/posts' />
                </Switch>
            </div>
        );
    }
}

export default Blog;