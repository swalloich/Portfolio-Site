import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main className="d-flex flex-column-reverse flex-md-row">
      <div className="dynamic-image-content">
        <div className="container pt-5 px-0 px-md-5">
          <div className="ms-5 text-end">
            <h1 className="jn-font-xl ms-0">Jacob Nelson</h1>
            <p>Web Developer</p>
          </div>
          <div className="mt-5 ms-5 text-end">
            <h2 className="jn-font-l">Need a website?</h2>
            <NavLink className="btn btn-primary d-block mt-3 w-fit-content" to="/projects">Get Started</NavLink>
          </div>
        </div>
      </div>
      <div className="dynamic-image-container jn-bg-pop-blue"></div>
    </main>
  )
}

export default Home;
