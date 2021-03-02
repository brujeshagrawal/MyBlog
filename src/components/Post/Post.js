import React, { Component } from 'react';

import classes from './Post.css';

class Post extends Component{
    render(){
        return (
            <div className={classes.Post} onClick={()=>this.props.clicked(this.props.post.id)}>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
            </div>
        );
    }
}

export default Post;