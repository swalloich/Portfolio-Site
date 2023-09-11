import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import "../styles/components/nav-hamburger.css";

export default function HamburgerButton({ hamburgerId, target }) {
    useEffect(() => {
        const buttons = document.querySelectorAll('.toggle-button');

        buttons.forEach((button) => {
            button.addEventListener('click', handleClick)
        });

        return () => {
            buttons.forEach((button) => {
                button.removeEventListener('click', handleClick);
            })
        }
    }, []);

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

    function showNavMenu(clickTarget, ms) {
        if (clickTarget) {
            if (clickTarget.classList.contains('jn-hidden')) {
                clickTarget.classList.remove('jn-hidden');
            }
            setTimeout(() => {
                if (clickTarget.classList.contains('jn-visually-hidden')) {
                    clickTarget.classList.remove('jn-visually-hidden');
                }
            }, ms);
        }
    }

    function internalToggleHamburgerIcon (clicked) {
        const hamburgers = document.querySelectorAll('.nav-hamburger');
        hamburgers.forEach((hamburger) => {
            const hamburgerChildren = hamburger.childNodes;
            if (hamburger === clicked || hamburger.contains(clicked)) {
                hamburgerChildren.forEach((child) => {
                    if (child.classList.contains('d-none')) {
                        child.classList.remove('d-none');
                        child.classList.add('d-block');
                    } else if (child.classList.contains('d-block')) {
                        child.classList.remove('d-block');
                        child.classList.add('d-none');
                    }
                });
            }
        });
    }

    function handleClick(event) {
        const targetElement = document.getElementById(target);
        if (targetElement) {
            if (targetElement.classList.contains('jn-visually-hidden') ||
                targetElement.classList.contains('jn-hidden')) {
                showNavMenu(targetElement, 5);
            } else {
                hideNavMenu(targetElement, 200);
            }
            internalToggleHamburgerIcon(event.target);
        } else {
            console.warn(`Target "${target}" not found.`)
        }
    }

    return (
        <div id={ target + "-hamburger" } className='nav-hamburger toggle-button' role='button'>
            <div class="d-block">
                <FontAwesomeIcon icon={icon({name: 'bars'})} />
            </div>
            <div class="d-none">
                <FontAwesomeIcon icon={icon({name: 'xmark'})} />
            </div>
        </div>
    );
}

export function toggleHamburgerIcon(hamburgerTarget) {
    const hamburgerElem = document.getElementById(hamburgerTarget + '-hamburger');
    hamburgerElem.childNodes.forEach((child) => {
        if (child.classList.contains('d-none')) {
            child.classList.remove('d-none');
            child.classList.add('d-block');
        } else if (child.classList.contains('d-block')) {
            child.classList.remove('d-block');
            child.classList.add('d-none');
        }
    });
}