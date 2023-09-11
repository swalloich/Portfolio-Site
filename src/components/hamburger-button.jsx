import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function HamburgerButton({ target }) {
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

    function handleClick(event) {
        const targetElement = document.getElementById(target);
        if (targetElement) {
            if (targetElement.classList.contains('jn-visually-hidden') ||
                targetElement.classList.contains('jn-hidden')) {
                showNavMenu(targetElement, 5);
            } else {
                hideNavMenu(targetElement, 200);
            }
        } else {
            console.warn(`Target "${target}" not found.`)
        }
    }

    return (
        <div className='nav-hamburger toggle-button' role='button'>
            <FontAwesomeIcon icon={icon({name: 'bars'})} />
        </div>
    );
}

export default HamburgerButton;