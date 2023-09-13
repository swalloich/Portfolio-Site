import React from "react";

// component imports
import { toggleHamburgerIcon } from "./hamburger-button";

function CloseNavLink(props) {
    function handleClick(event) {
        const clickTarget = document.getElementById(props.target);
        if (clickTarget && !clickTarget.firstChild.classList.contains("active")) {
            hideNavMenu(clickTarget, 200);
            toggleHamburgerIcon(props.target);
        }
    }

    function hideNavMenu(clickTarget, ms) {
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

    return (
        <>
            <li className="closeNav" onClick={handleClick}>
                { props.children }
            </li>
        </>
    );
}

export default CloseNavLink;