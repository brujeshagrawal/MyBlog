import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Backdrop from '../UI/Backdrop/Backdrop';

class Layout extends Component{
    state = {
        displaySideDrawer: false
    }

    clickedMenuHandler = () => {
        this.setState({displaySideDrawer: true});
    }

    clickBackdropHandler = () => {
        this.setState({displaySideDrawer: false});
    }
    
    render(){
        return (
            <Aux>
                <Toolbar clickedMenu={this.clickedMenuHandler}/>
                { this.state.displaySideDrawer ? 
                    <Aux>
                        <SideDrawer />
                        <Backdrop clicked={this.clickBackdropHandler} />
                    </Aux> 
                : null }
                <div>{this.props.children}</div>
            </Aux>
        );
    }
} 

export default Layout;