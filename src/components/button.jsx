import React from "react";
import PropTypes from 'prop-types';

// style sheets
import "../styles/components/button.css"
import "../styles/utility-classes.css";

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mutableClasses: [],
        }
    }

    static propTypes = {
        href: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        className: PropTypes.string,
        children: PropTypes.node,
    }

    get classList() {
        const { className } = this.props;
        let list = 'button ';
        // uncomment the line below if mutableClasses starts being used.
        //list += ` ${this.state.mutableClasses.join(' ')}`;
        if (className) { list += ` ${className}`; }
        return list;
    }

    render() {
        const { href, onClick, children } = this.props;

        return (
            <a href={href} onClick={onClick} className={this.classList}>
                { children }
            </a>
        );
    }
}
