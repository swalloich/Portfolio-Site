import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const HamburgerButton = (props) => {
  const { onClick, isMenuOpen = false, className } = props;
  const [classList] = useState(['nav-hamburger', 'toggle-button', 'bg-transparent', className ? className.split(' ') : '']);
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const timeout = (isMenuOpen) ? 100 : 200;
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
    }, timeout);
  }, [isMenuOpen]);

  return (
    <button ref={buttonRef} className={`${classList.join(' ')} ${isMenuOpen ? 'open' : 'closed'} ${className}`} type='button' onClick={onClick}>
      <div className="hamburger-icon">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="close-icon">
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </button>
  )
}

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

export default HamburgerButton;