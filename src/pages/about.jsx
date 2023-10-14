import React, { lazy } from 'react';

import headshot from "../images/jacob_headshot.jpg"

export class About extends React.Component {
    render () {
        return (
            <>
                <main className='d-flex flex-column align-items-center w-100'>
                    <div class="w-100 d-flex justify-content-end py-5">
                        <div class="right-edge-card jn-bg-super-light-blue-t">
                            <img src={headshot} alt="" height={300} width={300} onLoadStart={lazy}/>
                            <h1 className='jn-font-xl-md m-0 ms-5'>Jacob Nelson</h1>
                        </div>
                    </div>
                    <div className="jn-container">
                        <h1>About Page</h1>
                    </div>
                </main>
            </>
        )
    }
}