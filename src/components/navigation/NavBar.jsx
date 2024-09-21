import React, { useCallback, useState } from "react";
import PropTypes from 'prop-types';
import HamburgerButton from "../hamburger-button";
import NavLinks from "./NavLinks";

const NavBar = (props) => {
  const { children, navClassName = [], ulClassName = [] } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <NavLinks
        isMenuOpen={isMenuOpen}
        onClick={toggleMenu}
        navClassName={navClassName}
        ulClassName={ulClassName}
      >
        {children}
      </NavLinks>
      <HamburgerButton onClick={toggleMenu} isMenuOpen={isMenuOpen} />
    </>
  )
}

NavBar.propTypes = {
  children: PropTypes.node,
  navClassName: PropTypes.array,
  ulClassName: PropTypes.array,
}

export default NavBar;
