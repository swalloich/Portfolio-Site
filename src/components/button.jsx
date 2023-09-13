import React, { useState } from "react";

// style sheets
import "../styles/components/button.css"
import "../styles/utility-classes.css";

export function Button(props) {
    const handleDownload = () => {
        console.log("Insert downloading noises here.");
    }

    const handleRedirect = () => {
        console.log("Insert redirecting noises here");
    }

    switch (props.action) {
        case "download":
            return (
                <button
                    className={ props.className + " button border-r-10" }
                    onClick={handleDownload}>
                    { props.children }
                </button>
            );
        case "redirect":
            return (
                <button
                    className={ props.className + " button border-r-10" }
                    onClick={handleRedirect}>
                    { props.children }
                </button>
            );
    }
}