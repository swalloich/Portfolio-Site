import React from "react";
import PropTypes from 'prop-types';

class CloseNavLink extends React.Component {
    static propTypes = {
        onLinkClicked: PropTypes.func.isRequired,
    }

    render() {
        const { onLinkClicked } = this.props;

        return (
            <li className="closeNav" onClick={onLinkClicked}>
                { this.props.children }
            </li>
        );
    }
}

export default CloseNavLink;
