import React from "react";

import "../styles/utility-classes.css";

export class NotFound extends React.Component
{
    render () {
        return (
            <main className='d-flex flex-column align-items-center jn-font-light-gray'>
                <h1 className="mt-5 mb-0 jn-font-xxl">404</h1>
                <p className="mt-2 jn-font-l">Page not found</p>
            </main>
        );
    }
}