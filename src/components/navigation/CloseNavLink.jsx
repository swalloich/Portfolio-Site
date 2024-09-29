import React from "react";
import PropTypes from "prop-types";

const CloseNavLink = (props) => {
    const { onClick, children } = props;

    return (
        <li className="closeNav" onClick={onClick} role="button">
            { children }
        </li>
    );
}

CloseNavLink.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
}

export default CloseNavLink;
