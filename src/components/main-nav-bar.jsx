import React from "react";

// component imports
import HamburgerButton from "./hamburger-button";

function MainNavBar({ children }) {
    return (
        <>
            <nav className="nav-bar hidden" id="main-nav">
                { children }
            </nav>
            <HamburgerButton target="main-nav" />
        </>
    )
}

export default MainNavBar;