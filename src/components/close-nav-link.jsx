import React from "react";

// component imports
import { toggleHamburgerIcon } from "./hamburger-button";

export class CloseNavLink extends React.Component {
    handleClick = (event) => {
        const clickTarget = document.getElementById(this.props.target);
        if (clickTarget && !clickTarget.firstChild.classList.contains("active")) {
            this.hideNavMenu(clickTarget, 200);
            toggleHamburgerIcon(this.props.target);
        }
    }

    hideNavMenu(clickTarget, ms) {
        if (clickTarget) {
            if (!clickTarget.classList.contains("jn-visually-hidden")) {
                clickTarget.classList.add("jn-visually-hidden");
            }
            setTimeout(() => {
                if (!clickTarget.classList.contains("jn-hidden")) {
                    clickTarget.classList.add("jn-hidden");
                }
            }, ms);
        }
    }

    render() {
        return (
            <li className="closeNav" onClick={this.handleClick}>
                { this.props.children }
            </li>
        );
    }
}