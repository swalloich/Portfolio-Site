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

    function hideNavMenu(ms) {
        const containerTarget = document.getElementById(target);
        if (containerTarget) {
            if (!containerTarget.classList.contains("jn-visually-hidden")) {
                containerTarget.classList.add("jn-visually-hidden");
            }
            setTimeout(() => {
                if (!containerTarget.classList.contains("jn-hidden")) {
                    containerTarget.classList.add("jn-hidden");
                }
            }, ms); 
        }
    }

    function handleClick(event) {
        const targetElement = document.getElementById(target);
        if (targetElement) {
            if (targetElement.classList.contains('jn-visually-hidden') ||
                targetElement.classList.contains('jn-hidden')) {
                targetElement.classList.remove('jn-hidden');
                targetElement.classList.remove("jn-visually-hidden");
            } else {
                hideNavMenu(200);
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