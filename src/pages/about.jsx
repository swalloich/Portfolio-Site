import React, { lazy } from 'react';

import { FadeIn } from "../components/fade-in"

import headshot from "../images/jacob_headshot.jpg"

import "../styles/utilities/animations.css"

export class About extends React.Component {
    render () {
        return (
            <>
                <main className='d-flex flex-column align-items-center w-100 overflow-hidden'>
                    <div className="w-100 d-flex justify-content-end py-5 jn-anim-slide-from-right">
                        <div className="right-edge-card jn-bg-super-light-blue-t">
                            <img src={headshot} alt="" height={300} width={300} onLoadStart={lazy}/>
                            <h1 className='jn-font-xl-md m-0 ms-3 ms-md-5'>Jacob Nelson</h1>
                        </div>
                    </div>
                    <div className="jn-container">
                        <FadeIn className='row jn-font-l jn-font-xl-lg'>
                            <div>Need a website?</div>
                            <div></div>
                        </FadeIn>
                    </div>
                </main>
            </>
        )
    }
}