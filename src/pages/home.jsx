import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import FadeIn from "../components/fade-in";
// resources
import headshot from "../images/jacob_headshot.jpg";
// style sheets
import "../styles/utilities/animations.css";
import "../styles/components/dynamic-image.css";

class Home extends React.Component {
    render() {
        return (
            <main class="d-flex flex-column-reverse flex-md-row">
                <div className='dynamic-image-content'>
                    <div className='container pt-5 px-0 px-md-5'>
                        <div className='ms-5'>
                            <h1 className='jn-font-xl ms-0'>Jacob Nelson</h1>
                            <p>Web Developer</p>
                        </div>
                        <div className='mt-5 ms-5'>
                            <h2 className='jn-font-l'>Need a website?</h2>
                            <button className='btn btn-primary d-block mt-3'>Click Here</button>
                        </div>
                    </div>
                </div>
                <div className='dynamic-image-container jn-bg-pop-blue'></div>
            </main>
        )
    }
}

export default Home;
