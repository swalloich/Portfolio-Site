import React from "react";

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

    get classList() {
        let list = 'button ';
        // uncomment the line below if mutableClasses starts being used.
        //list += ` ${this.state.mutableClasses.join(' ')}`;
        if (this.props.className) { list += ` ${this.props.className}`; }
        return list;
    }

    render() {
        return (
            <a href={ this.props.href } onClick={this.props.onClick} className={this.classList}>
                { this.props.children }
            </a>
        );
    }
}