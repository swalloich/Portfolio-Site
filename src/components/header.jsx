// React imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// style sheet imports
import "../styles/utility-classes.css";
import "../styles/components/header.css";

import logo from "../images/logo.png";

class Header extends React.Component {
    static propTypes = {
        onHomeClicked: PropTypes.func.isRequired,
        children: PropTypes.node,
    }

    render() {
        const { onHomeClicked, children } = this.props;

        return (
            <header className='header box-shadow-bottom'>
                <div className='jn-container'>
                    <div className='logo divider-right'>
                        <NavLink to='' onClick={onHomeClicked}>
                            <img src={logo} alt=""></img>
                        </NavLink>
                    </div>
                    {children}
                </div>
            </header>
        );
    }
}

export default Header