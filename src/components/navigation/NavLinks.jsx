import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const baseNavClasses = ['nav-bar', 'jn-visually-hidden', 'jn-hidden'];
const baseUlClasses = ['jn-visually-hidden', 'jn-hidden'];

const NavLinks = (props) => {
  const { children, isMenuOpen, navClassName, onClick = [], ulClassName = [] } = props;

  const [navClasses, setNavClasses] = useState([...baseNavClasses, ...navClassName]);
  const [ulClasses] = useState([...baseUlClasses, ...ulClassName]);

  const openNavMenu = useCallback(() => {
    if (navClasses.includes('jn-hidden')) {
      setNavClasses((prev) => prev.filter((c) => c !== 'jn-hidden'));
    }
    if (navClasses.includes('jn-visually-hidden')) {
      setTimeout(() => {
        setNavClasses(navClasses.filter((c) => c !== 'jn-visually-hidden'))
      }, 50);
    }
  }, [navClasses, setNavClasses]);

  const closeNavMenu = useCallback(() => {
    if (!navClasses.includes('jn-visually-hidden')) {
      setNavClasses((prev) => [...prev, 'jn-visually-hidden']);
    }
    if (!navClasses.includes('jn-hidden')) {
      setTimeout(() => {
        setNavClasses((prev) => [...prev, 'jn-hidden']);
      }, 200);
    }
  }, [navClasses, setNavClasses]);

  useEffect(() => {
    if (isMenuOpen) {
      openNavMenu();
    } else {
      closeNavMenu();
    }
  }, [isMenuOpen, openNavMenu, closeNavMenu]);

  return (
    <nav className={navClasses.join(' ')} onClick={onClick}>
      <ul className={ulClasses.join(' ')}>
        {children}
      </ul>
    </nav>
  );
}

NavLinks.propTypes = {
  children: PropTypes.node.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  navClassName: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  ulClassName: PropTypes.array,
}

export default NavLinks;
