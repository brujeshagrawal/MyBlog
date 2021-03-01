import React, { Component } from 'react';

import classes from './NewPost.css';

class NewPost extends Component{
    render(){
        return (
            <div className={classes.NewPost}>
                <form>
                    <div className={classes.InputElementGroup} >
                        <label>Title : </label>
                        <input type="text" className={classes.InputElement}/>
                    </div>
                    <div className={classes.InputElementGroup}>
                        <label>Content : </label>
                        <textarea className={classes.InputElement} rows='5'></textarea>
                    </div>
                    <div className={classes.InputElementGroup}>
                        <button 
                            className={classes.FormButton}
                            onClick={this.props.addPost}>Add Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewPost;