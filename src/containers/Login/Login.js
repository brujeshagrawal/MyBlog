import React, { Component } from 'react';
import axios from '../../axios';
import classes from './Login.css';

import Input from '../../components/UI/Input/Input';

class Login extends Component{
    state = {
        loginForm : {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'username',
                    placeholder: 'Your Username'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    name: 'password',
                    placeholder: 'Enter your password'
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
    };

    checkValidity(value, rules){
        let isValid = true;

        if(!rules){
            return true;
        }

        if(rules.required){
            isValid = isValid && value.trim() !== '';
        }

        return isValid;
    }

    inputChangedHandler = (event) => {
        const loginForm = {...this.state.loginForm};
        const loginFormElement = {...loginForm[event.target.name]};
        loginFormElement.value = event.target.value;
        loginFormElement.touched = true;
        loginFormElement.valid = this.checkValidity(loginFormElement.value, loginFormElement.validation);
        loginForm[event.target.name] = loginFormElement;

        let formValid = true;
        for(let inputIdentifier in loginForm){
            formValid = formValid && loginForm[inputIdentifier].valid;
        }

        this.setState({loginForm: loginForm, formValid: formValid});
    }

    submitFormHandler = (event) => {
        event.preventDefault();
        const data = {};
        Object.keys(this.state.loginForm)
                .forEach(formKey => data[this.state.loginForm[formKey].elementConfig.name] = this.state.loginForm[formKey].value);
        console.log(data);
        axios.post('/user/login/', data)
                .then(response => {
                    console.log(response);
                    localStorage.setItem('MyBlog_token', response.data.token);
                    this.props.history.replace('/posts');
                })
                .catch(error => console.log(error));
    }

    render(){
        return (
            <div className={classes.Login}>
                <form onSubmit={this.submitFormHandler}>
                    {Object.keys(this.state.loginForm)
                            .map(formKey => <Input 
                                                key={formKey}
                                                changed={this.inputChangedHandler}
                                                invalid={!this.state.loginForm[formKey].valid && this.state.loginForm[formKey].touched}
                                                {...this.state.loginForm[formKey]}
                            />)}
                    <div style={{textAlign: 'center'}}>
                        <button 
                            className={classes.LoginButton}
                            disabled={!this.state.formValid}
                            >Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;