import React, { Component } from 'react';

import Post from './Post/Post';

import classes from './Posts.css';

class Posts extends Component{

    render(){
        return (
            <div className={classes.Posts}>
                {this.props.posts.map(post => (
                                    <Post key={post.id} 
                                            post={post}
                                            clicked={this.props.clicked} />
                                ))}
            </div>
        );
    }
}

export default Posts;