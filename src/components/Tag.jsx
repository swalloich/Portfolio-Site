import React from "react";
import PropTypes from "prop-types";

const Tag = (props) => {
    const { closable = false, children } = props;

    let classes = "tag";

    if (!closable) {
        classes += " no-close";
    }

    return (
        <div className={ classes }>
            <div>
                { children }
            </div>
        </div>
    );
}

Tag.propTypes = {
    closable: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default Tag;