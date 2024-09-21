import React from "react";

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
    closable: Boolean,
    children: String
}

export default Tag;