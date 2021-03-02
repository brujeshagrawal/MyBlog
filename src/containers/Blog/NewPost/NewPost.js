import React, { Component } from 'react';
import axios from '../../../axios';
import classes from './NewPost.css';

class NewPost extends Component{

    state={
        post: {
            title:'',
            body:''
        }
    };

    inputChangeHandler = (event) => {
        const post = {...this.state.post};
        post[event.target.name] = event.target.value;
        this.setState({post: post});
    }

    addPostHandler = () => {
        const post = {...this.state.post};
        axios.post('/posts/api/', post)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        this.props.history.replace('/posts');
    }

    render(){
        return (
            <div className={classes.NewPost}>
                <form>
                    <div className={classes.InputElementGroup} >
                        <label>Title : </label>
                        <input 
                            type="text" 
                            name="title"
                            className={classes.InputElement}
                            value={this.state.post.title}
                            onChange={(event) => this.inputChangeHandler(event)}
                        />
                    </div>
                    <div className={classes.InputElementGroup}>
                        <label>Content : </label>
                        <textarea 
                            className={classes.InputElement} 
                            name="body"
                            rows='5'
                            value={this.state.post.body}
                            onChange={(event) => this.inputChangeHandler(event)}
                        />
                    </div>
                    <div className={classes.InputElementGroup}>
                        <button 
                            className={classes.FormButton}
                            onClick={this.addPostHandler}
                        >Add Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewPost;