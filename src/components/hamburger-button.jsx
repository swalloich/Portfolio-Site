import React from 'react';
import PropTypes from 'prop-types';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// css imports
import "../styles/components/nav-hamburger.css";

class HamburgerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentClasses: [],
        }
    }

    static propTypes = {
        onMenuClick: PropTypes.func.isRequired,
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

    render() {
        const { onMenuClick } = this.props;

        return (
            <button className={this.classList} type='button' onClick={onMenuClick}>
                <div className="hamburger-icon">
                    <FontAwesomeIcon icon={icon({name: 'bars'})} />
                </div>
                <div className="close-icon">
                    <FontAwesomeIcon icon={icon({name: 'xmark'})} />
                </div>
            </button>
        )
    }
}

export default HamburgerButton;