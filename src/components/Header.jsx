import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png";

const Header = (props) => {
  const { logoClick, children } = props;

  return (
    <header className='header box-shadow-bottom'>
      <div className='jn-container'>
        <div className='logo divider-right'>
          <NavLink to='' onClick={logoClick}>
            <img src={logo} alt=""></img>
          </NavLink>
        </div>
        {children}
      </div>
    </header>
  )
}

Header.propTypes = {
  logoClick: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Header