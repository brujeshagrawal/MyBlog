import React, { Component } from 'react';
import axios from '../../../axios';
import classes from './NewPost.css';

import Input from '../../../components/UI/Input/Input';

class NewPost extends Component{

    // state={
    //     post: {
    //         title:'',
    //         body:''
    //     }
    // };

    state ={
        postForm : {
            title : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'title',
                    placeholder: 'Post Title'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            body: {
                elementType: 'textarea',
                elementConfig: {
                    name: 'body',
                    rows: '10',
                    placeholder: 'Post Body'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formValid: false
    }

    checkValidity(value, rules){
        let isValid = true;

        if(!rules){
            return true;
        }

        if(rules.required){
            isValid = isValid && value.trim() !== '';
        }
        if(rules.maxLength){
            isValid = isValid && value.length <= rules.maxLength;
        }
        return isValid;
    }

    inputChangedHandler = (event) => {
        const updatedPostForm = {...this.state.postForm};
        const updatedPost = {...updatedPostForm[event.target.name]};
        updatedPost.value = event.target.value;
        updatedPost.valid = this.checkValidity(updatedPost.value, updatedPost.validation);
        updatedPost.touched = true;
        updatedPostForm[event.target.name] = updatedPost;
        let formValid = true;
        for(let inputIdentifier in updatedPostForm){
            formValid = formValid && updatedPostForm[inputIdentifier].valid;
        }
        
        this.setState({postForm: updatedPostForm, formValid: formValid});
    }

    addPostHandler = () => {
        const post = {
            title: this.state.postForm.title.value,
            body: this.state.postForm.body.value
        };
        axios.post('/posts/api/', post)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        this.props.history.replace('/posts');
    }

    render(){
        return (
            <div className={classes.NewPost}>
                <form onSubmit={this.addPostHandler}>
                    { Object.keys(this.state.postForm)
                            .map(postKey => <Input 
                                                key={postKey}
                                                changed={this.inputChangedHandler}
                                                invalid={!this.state.postForm[postKey].valid && this.state.postForm[postKey].touched}
                                                {...this.state.postForm[postKey]} />) }
                     
                    <div className={classes.InputElementGroup}>
                        <button 
                            className={classes.FormButton}
                            disabled={!this.state.formValid}
                        >Add Post</button>
                    </div> 
                </form>
            </div>
        );
    }
}

export default NewPost;