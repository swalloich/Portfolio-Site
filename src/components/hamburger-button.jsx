import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function HamburgerButton() {
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
        const targetId = event.currentTarget.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
            if (target.classList.contains('hidden')) {
                target.classList.remove('hidden');
            } else {
                target.classList.add('hidden');
            }
        } else {
            console.warn(`Target "${targetId}" not found.`)
        }
    }

    return (
        <div className='nav-hamburger toggle-button' role='button' data-target="main-nav" data-action="toggle-visibility">
            <FontAwesomeIcon icon={icon({name: 'bars'})} />
        </div>
    );
}

export default HamburgerButton;