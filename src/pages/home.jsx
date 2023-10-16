import React, { lazy } from 'react';

import { FadeIn } from "../components/fade-in"
import { Button } from '../components/button'

import headshot from "../images/jacob_headshot.jpg"

import "../styles/utilities/animations.css"

export class Home extends React.Component {
    render () {
        return (
            <>
                <main className='d-flex flex-column align-items-center w-100'>
                    <div className="w-100 d-flex justify-content-end py-5 jn-anim-slide-from-right">
                        <div className="right-edge-card jn-bg-super-light-blue-t">
                            <img src={headshot} alt="" height={300} width={300} onLoadStart={lazy}/>
                            <h1 className='jn-font-xl-md m-0 ms-3 ms-md-5'>Jacob Nelson</h1>
                        </div>
                    </div>
                    <div className="jn-container">
                        <FadeIn className='row jn-font-l jn-font-xl-lg' delay={1000}>
                            <div>Need a website?</div>
                        </FadeIn>
                        <FadeIn className='row jn-font-l jn-font-xl-lg mt-5' delay={2000}>
                            <div>Check out my work.</div>
                        </FadeIn>
                        <FadeIn className='mt-5' delay={3000}>
                            <Button href="/projects" className="jn-bg-pop-blue d-flex justify-content-center">Click Here</Button>
                        </FadeIn>
                    </div>
                </main>
            </>
        )
    }
}