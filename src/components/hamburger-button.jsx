import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

class HamburgerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentClasses: [],
        }
        this.buttonRef = React.createRef();
    }

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        isMenuOpen: PropTypes.bool.isRequired,
        className: PropTypes.string,
    }

    get classList() {
        const { className, isMenuOpen } = this.props;
        let list = `nav-hamburger toggle-button bg-transparent ${className || ""}`;

        if (isMenuOpen) {
            list += ' open';
        } else {
            list += ' closed';
        }

        return list;
    }

    componentDidUpdate() {
        const { isMenuOpen } = this.props;
        const button = this.buttonRef.current;
        const disableTime = (isMenuOpen) ? 100 : 200;
        button.disabled = true;
        setTimeout(() => {
            button.disabled = false;
        }, disableTime);
    }

    render() {
        const { onClick } = this.props;

        return (
            <button ref={this.buttonRef} className={this.classList} type='button' onClick={onClick}>
                <div className="hamburger-icon">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="close-icon">
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </button>
        )
    }
}

export default HamburgerButton;