import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
// import FullPost from '../../components/FullPost/FullPost';
import NewPost from './NewPost/NewPost';

import classes from './Blog.css';
// import axios from '../../axios';

class Blog extends Component{
    // state={
    //     posts: [],
    //     displayPost: null,
    // }

    // componentDidMount(){
    //     axios.get('/posts/api/')
    //             .then(response => this.setState({posts: response.data}))
    //             .catch(error => console.log(error));
    // }

    // getPosts = () => {
    //     axios.get('')
    //             .then(response => {
    //                 const data = response.data;
    //                 this.setState({posts: data, displayPost: data[0]});
    //             })
    //             .catch(error => console.log(error));
    // }

    // postClickHandler = (id) => {
    //     const posts = [...this.state.posts];
    //     const matchedPost = posts.filter(post => post.id === id);
    //     this.setState({displayPost: matchedPost[0]});
    //     console.log(this.props);
    //     // this.props.history.push('/' + toString(id));
    // }

    // deletePostHandler = (id) => {
    //     axios.delete(id)
    //             .then(response => {
    //                 console.log(response);
    //                 this.getPosts();
    //             })
    //             .catch(error => console.log(error));
    // }

    // addPostHandler = () => {
    //     const post = {
    //         title: "New Post",
    //         body: "Hey there. This is a new post. Please go through this and share your feedback which will help us provide you better content."
    //     }
    //     axios.post('', post)
    //             .then(response => {
    //                 console.log(response);
    //                 this.getPosts();
    //             })
    //             .catch(error => console.log(error));
    // }

    render(){
        // const postList = [...this.state.posts];
        // let posts = null;
        // let fullPost = <p>Please choose a post to see the full post.</p>
        // if(postList.length > 0){
        //     posts = <Posts posts={postList}
        //                     clicked={this.postClickHandler} />;
        //     fullPost = <FullPost 
        //                         post={this.state.displayPost}
        //                         deletePost={this.deletePostHandler} />;
        // }
        return (
            <div className={classes.Blog}>

                <Switch>
                    <Route path='/posts' component={Posts} />
                    <Route path='/new-post' component={NewPost} />
                    <Redirect from='/' to='/posts' />
                </Switch>
                
                
                {/* {posts}
                {fullPost} */}
                {/* <NewPost addPost={this.addPostHandler} /> */}
            </div>
        );
    }
}

export default Blog;