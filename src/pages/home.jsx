import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import FadeIn from "../components/fade-in";
// resources
import headshot from "../images/jacob_headshot.jpg"
// style sheets
import "../styles/utilities/animations.css"

class Home extends React.Component {
    render() {
        return (
            <main className='d-flex flex-column align-items-center w-100'>
                <div className="w-100 d-flex justify-content-end py-5 jn-anim-slide-from-right">
                    <div className="right-edge-card jn-bg-super-light-blue-t">
                        <img src={headshot} alt="" height={300} width={300} loading='lazy' />
                        <h1 className='jn-font-xl-md m-0 ms-3 ms-md-5'>Jacob Nelson</h1>
                    </div>
                </div>
                <div className="jn-container">
                    <FadeIn className='row jn-font-l jn-font-xl-lg' delay={500}>
                        <div>Need a website?</div>
                    </FadeIn>
                    <FadeIn className='row jn-font-l jn-font-xl-lg mt-5' delay={1000}>
                        <div>Check out my work.</div>
                    </FadeIn>
                    <FadeIn className='mt-5' delay={1500}>
                        <NavLink to="/projects" className="btn btn-primary jn-font-text-color">Click Here</NavLink>
                    </FadeIn>
                </div>
            </main>
        )
    }
}

export default Home;
