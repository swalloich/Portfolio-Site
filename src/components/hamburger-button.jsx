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

    function handleClick(event) {
        const targetElement = document.getElementById(target);
        if (targetElement) {
            if (targetElement.classList.contains('hidden')) {
                targetElement.classList.remove('hidden');
            } else {
                targetElement.classList.add('hidden');
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