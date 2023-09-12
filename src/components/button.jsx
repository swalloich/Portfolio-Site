import React, { useEffect, useState } from "react";

// style sheets
import "../styles/components/button.css"
import "../styles/utility-classes.css";

export function Button({ action, src, className, children }) {
    useEffect(() => {
        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            switch (action) {
                case "download":
                    button.addEventListener('click', handleDownload);
                    break;
                case "redirect":
                    button.addEventListener('click', handleRedirect);
                    break;
            }
        });
    });
    
    function handleDownload(event) {

    }

    function handleRedirect(event) {

    }

    return (
        <a className={ className + " button border-r-10" }>
            { children }
        </a>
    );
}