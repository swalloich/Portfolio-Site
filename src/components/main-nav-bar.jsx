import React, { useEffect } from "react";

// component imports
import HamburgerButton from "./hamburger-button";

function MainNavBar({ navBarId, children }) {
    useEffect(() => {
        const navContainer = document.getElementById("main-nav");
        navContainer.addEventListener("click", handleOutsideClick);

        return () => {
            navContainer.removeEventListener("click", handleOutsideClick);
        }
    })

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
    }

    return (
        <>
            <nav className="nav-bar jn-hidden jn-visually-hidden" id={navBarId}>
                { children }
            </nav>
            <HamburgerButton target="main-nav" />
        </>
    )
}

export default MainNavBar;