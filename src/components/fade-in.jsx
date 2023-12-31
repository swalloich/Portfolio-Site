import React from 'react';

import "../styles/utilities/animations.css"

class FadeIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mutableClasses: ["jn-opacity-0"],
        }
        if (this.props.delay) {
            this.delay = this.props.delay;
        } else {
            this.delay = 1000;
        }
    }

    #removeClass(className) {
        let classArray = this.state.mutableClasses;
        for (let i = 0; i < classArray.length; i++)
        {
            if (classArray[i] === className) {
                classArray.splice(i, 1);
                this.setState({ mutableClasses: classArray });
            }
        }
    }

    #addClass(className) {
        this.state.mutableClasses.push(className);
    }

    get classList() {
        let list = 'jn-anim-fade-in';
        list += ` ${this.state.mutableClasses.join(' ')}`;
        if (this.props.className) { list += ` ${this.props.className}`; }
        return list;
    }

    componentDidMount() {
        setTimeout(() => {
            if (!this.state.mutableClasses.includes('jn-opacity-100')) {
                this.#addClass('jn-opacity-100');
                this.#removeClass('jn-opacity-0');
            }
        }, this.delay);
    }

    render() {
        return (
            <div className={ this.classList }>
                { this.props.children }
            </div>
        );
    }
}

export default FadeIn;
