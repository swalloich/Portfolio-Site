import React from "react";

class NotFound extends React.Component
{
    render () {
        return (
            <main className='d-flex flex-column align-items-center jn-font-sl-blue'>
                <h1 className="mt-5 mb-0 mx-auto jn-font-xxl">404</h1>
                <p className="mt-2 mx-auto jn-font-l">Page not found</p>
            </main>
        );
    }
}

export default NotFound;
