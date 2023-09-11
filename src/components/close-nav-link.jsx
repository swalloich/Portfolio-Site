import React, { useEffect } from "react";

// component imports
import { toggleHamburgerIcon } from "./hamburger-button";

function CloseNavLink({ target, children }) {
    useEffect (() => {
        // add listener
        const closeItems = document.querySelectorAll(".closeNav");

        closeItems.forEach((item) => {
            item.addEventListener('click', handleClick);
        });

        function handleClick(event) {
            const clickTarget = document.getElementById(target);
            if (clickTarget && !clickTarget.firstChild.classList.contains("active")) {
                hideNavMenu(clickTarget, 200);
                toggleHamburgerIcon(target);
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

        return () => {
            closeItems.forEach((item) => {
                item.removeEventListener('click', handleClick);
            })
        }
    });

    return (
        <>
            <li className="closeNav">
                { children }
            </li>
        </>
    );
}

export default CloseNavLink;