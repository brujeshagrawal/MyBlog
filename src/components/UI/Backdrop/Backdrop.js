import React, { Component } from 'react';

import classes from './Backdrop.css';

class Backdrop extends Component{
    render(){
        return (
            <div className={classes.Backdrop} onClick={this.props.clicked}></div>
        );
    }
}

export default Backdrop;