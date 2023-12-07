import React, { Component } from "react";
import PropTypes from 'prop-types';

// component and utility function imports
import HamburgerButton from "./hamburger-button";

// css imports
import "../styles/components/nav-bar.css";

class NavBar extends Component {
    static propTypes = {
        onMenuClick: PropTypes.func.isRequired,
        onMenuClose: PropTypes.func.isRequired,
        isMenuOpen: PropTypes.bool.isRequired,
        children: PropTypes.node,
        navClassName: PropTypes.string,
        ulClassName: PropTypes.string,
    }

    get navClassList() {
        const { isMenuOpen, navClassName } = this.props;
        const baseNavClasses = `nav-bar${(isMenuOpen) ? "" : " jn-visually-hidden"}`
        return `${baseNavClasses} ${navClassName || ""}`;
    }

    get ulClassList() {
        const { ulClassName } = this.props;
        const baseUlClasses = `jn-visually-hidden jn-hidden`;
        return `${baseUlClasses} ${ulClassName || ""}`;
    }

    render() {
        const { onMenuClick, onMenuClose, isMenuOpen, children } = this.props;

        return (
            <>
                <nav className={this.navClassList} onClick={onMenuClose}>
                    <ul className="jn-visually-hidden jn-hidden">
                        {children}
                    </ul>
                </nav>
                <HamburgerButton onMenuClick={onMenuClick} isMenuOpen={isMenuOpen} />
            </>
        );
    }
}

export default NavBar;
