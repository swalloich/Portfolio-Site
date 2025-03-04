import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row } from '../components'
import headshot from '../images/jacob_headshot.jpg'
import { Image, LayoutBand } from '../components'

const Home = () => {
  return (
    <>
      <div className="jn-color-banner-tall" />
      <LayoutBand>
        <div className="pt-5 px-0 px-md-5">
          <Row>
            <div>
              <Image src={headshot} alt="Jacob Nelson" />
            </div>
            <h1>Engineering Web Solutions With Precision</h1>
          </Row>
          <div className="mt-5 ms-5 text-end">
            <NavLink className="btn btn-primary d-block mt-3 w-fit-content" to="/projects">Get Started</NavLink>
          </div>
        </div>
      </ LayoutBand>
    </>
  )
}

export default Home
