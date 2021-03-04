import React, { Component } from 'react';
import classes from './Input.css';

class Input extends Component{
    render(){
        let inputElement = null;
        let inputElementClasses = [classes.InputElement];
        if(this.props.invalid){
            inputElementClasses.push(classes.Invalid);
        }

        switch(this.props.elementType){
            case('input'):
                inputElement = <input 
                                    className={inputElementClasses.join(' ')}
                                    {...this.props.elementConfig}
                                    value={this.props.value}
                                    onChange={this.props.changed} />
                break;
            case('textarea'):
                inputElement = <textarea 
                                    className={inputElementClasses.join(' ')}
                                    {...this.props.elementConfig}
                                    value={this.props.value}
                                    onChange={this.props.changed} />
                break;
            default:
                inputElement = <input 
                                    className={inputElementClasses.join(' ')}
                                    {...this.props.elementConfig}
                                    value={this.props.value}
                                    onChange={this.props.changed} />
                break;
        }

        return (
            <div className={classes.Input}>
                <label className={classes.Label}>{this.props.label}</label>
                {inputElement}
            </div>
        );
    }
}

export default Input;