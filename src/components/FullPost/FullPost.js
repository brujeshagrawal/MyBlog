import React, { Component } from 'react';

import classes from './FullPost.css';

class FullPost extends Component{

    render(){
        return (
            <div className={classes.FullPost}>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <button 
                    className={classes.DeleteButton}
                    onClick={() => this.props.deletePost(this.props.post.id)}>Delete</button>
            </div>
        );
    }
}

export default FullPost;