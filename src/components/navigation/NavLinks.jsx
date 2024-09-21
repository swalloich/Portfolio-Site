import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const NavLinks = (props) => {
  const { children, isMenuOpen, navClassName, onClick = [], ulClassName = [] } = props;

  const [navClasses, setNavClasses] = useState(['nav-bar', 'jn-visually-hidden', ...navClassName]);
  const [ulClasses] = useState(['jn-visually-hidden', 'jn-hidden', ...ulClassName]);

  const openNavMenu = () => {
    setNavClasses((prev) => prev.filter((c) => c !== 'jn-hidden'));
    setTimeout(() => {
      setNavClasses((prev) => prev.filter((c) => c !== 'jn-visually-hidden'));
    }, 50);
  }

  const closeNavMenu = () => {
    setNavClasses((prev) => [...prev, 'jn-visually-hidden']);
    setTimeout(() => {
      setNavClasses((prev) => [...prev, 'jn-hidden']);
    }, 200);
  }

  useEffect(() => {
    if (isMenuOpen) {
      openNavMenu()
    } else {
      closeNavMenu()
    }
  }, [isMenuOpen]);

  return (
    <nav className={navClasses.join(' ')} onClick={onClick}>
      <ul className={ulClasses}>
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
