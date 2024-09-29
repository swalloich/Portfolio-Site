import React from "react";
import PropTypes from 'prop-types';
import HamburgerButton from "../HamburgerButton";
import NavLinks from "./NavLinks";

const NavBar = (props) => {
  const { children, isOpen: isMenuOpen, menuClick: setIsOpen, navClassName = [], ulClassName = [] } = props;

  return (
    <>
      <NavLinks
        isMenuOpen={isMenuOpen}
        onClick={setIsOpen}
        navClassName={navClassName}
        ulClassName={ulClassName}
      >
        {children}
      </NavLinks>
      <HamburgerButton onClick={setIsOpen} isMenuOpen={isMenuOpen} />
    </>
  )
}

NavBar.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  menuClick: PropTypes.func,
  navClassName: PropTypes.array,
  ulClassName: PropTypes.array,
}

export default NavBar;
