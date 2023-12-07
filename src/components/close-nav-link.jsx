import React from "react";
import PropTypes from 'prop-types';

class CloseNavLink extends React.Component {
    static propTypes = {
        onLinkClicked: PropTypes.func.isRequired,
        children: PropTypes.node,
    }

    render() {
        const { onLinkClicked, children } = this.props;

        return (
            <li className="closeNav" onClick={onLinkClicked}>
                { children }
            </li>
        );
    }
}

export default CloseNavLink;
