import React from "react";

import "../styles/utility-classes.css";

export class NotFound extends React.Component
{
    render () {
        return (
            <main class='d-flex flex-column align-items-center jn-font-light-gray'>
                <h1 class="mt-5 mb-0 jn-font-xxl">404</h1>
                <p class="mt-2 jn-font-l">Page not found</p>
            </main>
        );
    }
}