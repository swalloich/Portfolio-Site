import React from "react";

// css imports
import "../styles/components/tag.css";

export function Tag(props) {

    let classes = "tag";

    if (!props.closable) {
        classes += " no-close";
    }

    return (
        <div className={ classes }>
            <div>
                { props.children }
            </div>
        </div>
    );
}