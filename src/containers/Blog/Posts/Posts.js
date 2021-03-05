import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios';
import classes from './Posts.css';

import Post from '../../../components/Post/Post';
import FullPost from '../../../components/FullPost/FullPost';

class Posts extends Component{

    state= { 
        posts : null,
        displayPost: {}
    };

    componentDidMount(){
        axios.get('/posts/')
                .then(response => this.setState({posts: response.data}))
                .catch(error => console.log(error));
    }

    postClickHandler = (id) => {
        axios.get('/posts/' + id + '/')
                .then(response => this.setState({displayPost: response.data}))
                .catch(error => console.log(error));
        this.props.history.push('/posts/' + id);
    }

    deletePostHandler = (id) => {
        axios.delete('/posts/' + id + '/')
                .then(response => console.log(response))
                .catch(error => console.log(error));
        this.props.history.replace('/posts/');
    }

    render(){
        let posts = null;
        if(this.state.posts){
            posts = this.state.posts.map(post => (<Post 
                                                    key={post.id} 
                                                    post={post}
                                                    clicked={this.postClickHandler} />));
        }

        return (
            <div className={classes.Posts}>
                {posts}
                <Route path={this.props.match.path + '/:id'}
                        render={() => <FullPost post={this.state.displayPost}
                                                deletePost={this.deletePostHandler} />} />
            </div>
        );
    }
}

export default Posts;