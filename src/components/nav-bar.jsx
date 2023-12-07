import React, { Component } from "react";
import PropTypes from 'prop-types';

// component and utility function imports
import HamburgerButton from "./hamburger-button";

// css imports
import "../styles/components/nav-bar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
    }

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
        const baseNavClasses = `nav-bar jn-visually-hidden`;
        return `${baseNavClasses} ${navClassName || ""}`;
    }

    get ulClassList() {
        const { ulClassName } = this.props;
        const baseUlClasses = `jn-visually-hidden jn-hidden`;
        return `${baseUlClasses} ${ulClassName || ""}`;
    }

    updateNavClassList(action, className) {
        const nav = this.navRef.current;

        if (nav) {
            const classList = nav.classList;
            if (action === "add") {
                if (!classList.contains(className)) {
                    classList.add(className);
                }
            } else if (action === "remove") {
                if (classList.contains(className)) {
                    classList.remove(className);
                }
            }
        }
    }

    componentDidUpdate() {
        const { isMenuOpen } = this.props;
        if (!isMenuOpen) {
            this.updateNavClassList('add', 'jn-visually-hidden')
            setTimeout(() => {
                this.updateNavClassList('add', 'jn-hidden');
            }, 200);
        } else {
            this.updateNavClassList('remove', 'jn-hidden');
            setTimeout(() => {
                this.updateNavClassList('remove', 'jn-visually-hidden');
            }, 100)
        }
    }

    render() {
        const { onMenuClick, onMenuClose, isMenuOpen, children } = this.props;

        return (
            <>
                <nav ref={this.navRef} className={this.navClassList} onClick={onMenuClose}>
                    <ul className={this.ulClassList}>
                        {children}
                    </ul>
                </nav>
                <HamburgerButton onMenuClick={onMenuClick} isMenuOpen={isMenuOpen} />
            </>
        );
    }
}

export default NavBar;
