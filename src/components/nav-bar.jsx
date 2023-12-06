import React, {Component} from "react";
import PropTypes from 'prop-types';

// component and utility function imports
import { HamburgerButton } from "./hamburger-button";

// css imports
import "../styles/components/nav-bar.css";

class NavBar extends Component {
    static propTypes = {
        children: PropTypes.node,
        onMenuToggle: PropTypes.func.isRequired,
        isMenuOpen: PropTypes.bool.isRequired,
    }

    render () {
        const { children, onMenuToggle, isMenuOpen } = this.props;
        const classList = `nav-bar ${isMenuOpen ? '' : 'jn-hidden jn-visually-hidden'}`

        return (
            <>
                <nav className={classList}>
                    { children }
                </nav>
                <HamburgerButton onNenuClick={onMenuToggle} />
            </>
        );
    }
}

export default NavBar;      