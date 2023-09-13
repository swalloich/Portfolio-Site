import React from "react";

// component and utility function imports
import { HamburgerButton, toggleHamburgerIcon } from "./hamburger-button";

// css imports
import "../styles/components/nav-bar.css";

function NavBar({ navBarId, children }) {
    function hideNavMenu(target, ms) {
        if (target) {
            if (!target.classList.contains("jn-visually-hidden")) {
                target.classList.add("jn-visually-hidden");
            }
            setTimeout(() => {
                if (!target.classList.contains("jn-hidden")) {
                    target.classList.add("jn-hidden");
                }
            }, ms); 
        }
    }

    function handleOutsideClick(event) {
        hideNavMenu(event.target, 200);
        toggleHamburgerIcon(navBarId);
    }

    return (
        <>
            <nav className="nav-bar jn-hidden jn-visually-hidden" id={navBarId} onClick={handleOutsideClick}>
                { children }
            </nav>
            <HamburgerButton target="main-nav" />
        </>
    )
}

// TODO: move showNavMenu and closeNavMenu here then export them to be used in other files.

export default NavBar;