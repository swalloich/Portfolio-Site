import React from 'react';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// css imports
import "../styles/components/nav-hamburger.css";

export class HamburgerButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mutableClasses: ["closed"],
        };
    }

    #addClass(className) {
        this.state.mutableClasses.push(className);
    }

    #removeClass(className) {
        let classArray = this.state.mutableClasses;
        for (let i = 0; i < classArray.length; i++) {
            if (classArray[i] === className) {
                classArray.splice(i, 1);
                this.setState({ mutableClasses: classArray });
            }
        }
    }

    #showNavMenu(clickTarget, ms) {
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
    
    #hideNavMenu(clickTarget, ms) {
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

    toggleHamburgerIcon() {
        if (this.state.mutableClasses.includes('open')) {
            this.#addClass('closed');
            this.#removeClass('open');
        } else if (this.state.mutableClasses.includes('closed')) {
            this.#addClass('open');
            this.#removeClass('closed');
        }
        console.log(`Mutable Classes: ${this.state.mutableClasses}`)
    }

    handleClick = (event) => {
        const targetElement = document.getElementById(this.props.target);
        if (targetElement) {
            if (targetElement.classList.contains('jn-visually-hidden') ||
                targetElement.classList.contains('jn-hidden')) {
                this.#showNavMenu(targetElement, 5);
            } else {
                this.#hideNavMenu(targetElement, 200);
            }
            this.toggleHamburgerIcon(event.target);
        } else {
            console.warn(`Target "${this.props.target}" not found.`)
        }
    }

    get classList() {
        let list = "nav-hamburger toggle-button";
        if (this.state.mutableClasses.length > 0) {
            list += ` ${this.state.mutableClasses.join(' ')}`;
        }
        console.log(`class list constructed: ${list}`)
        return list;
    }

    render() {
        return (
            <div id={ this.props.target + "-hamburger" } className={this.classList} role='button' onClick={this.handleClick}>
                <div className="hamburger-icon">
                    <FontAwesomeIcon icon={icon({name: 'bars'})} />
                </div>
                <div className="close-icon">
                    <FontAwesomeIcon icon={icon({name: 'xmark'})} />
                </div>
            </div>
        )
    }
}

export function toggleHamburgerIcon(hamburgerTarget) {
    const targetElem = document.getElementById(`${hamburgerTarget}-hamburger`);
    if (targetElem) {
        if (targetElem.classList.contains('open')) {
            targetElem.classList.add('closed');
            targetElem.classList.remove('open');
        } else if (targetElem.classList.contains('close')) {
            targetElem.classList.add('open');
            targetElem.classList.remove('closed');
        }
    }
}