import React, { Component } from 'react';
import axios from '../../axios';
import classes from './Signup.css';

import Input from '../../components/UI/Input/Input';

class Signup extends Component{
    state = {
        signupForm : {
            first_name: {
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    name:'first_name',
                    placeholder: 'Your Firstname'
                },
                value:'',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            last_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'last_name',
                    placeholder: 'Your Lastname'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    name: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            username: {
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    name:'username',
                    placeholder: 'Enter your username'
                },
                value:'',
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
        const signupForm = {...this.state.signupForm};
        const signupFormElement = {...signupForm[event.target.name]};
        signupFormElement.value = event.target.value;
        signupFormElement.touched = true;
        signupFormElement.valid = this.checkValidity(signupFormElement.value, signupFormElement.validation);
        signupForm[event.target.name] = signupFormElement;

        let formValid = true;
        for(let inputIdentifier in signupForm){
            formValid = formValid && signupForm[inputIdentifier].valid;
        }

        this.setState({signupForm: signupForm, formValid: formValid});
    }

    submitFormHandler = (event) => {
        event.preventDefault();
        const data = {};
        Object.keys(this.state.signupForm)
                .forEach(formKey => data[this.state.signupForm[formKey].elementConfig.name] = this.state.signupForm[formKey].value);
        console.log(data);
        axios.post('/user/register/', data)
                .then(response => console.log(response))
                .catch(error => console.log(error));
    }

    render(){
        return (
            <div className={classes.Signup}>
                <form onSubmit={this.submitFormHandler}>
                    {Object.keys(this.state.signupForm)
                            .map(formKey => <Input 
                                                key={formKey}
                                                changed={this.inputChangedHandler}
                                                invalid={!this.state.signupForm[formKey].valid && this.state.signupForm[formKey].touched}
                                                {...this.state.signupForm[formKey]}
                            />)}
                    <div style={{textAlign: 'center'}}>
                        <button 
                            className={classes.SignupButton}
                            type='submit'
                            disabled={!this.state.formValid}
                            >Signup</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;