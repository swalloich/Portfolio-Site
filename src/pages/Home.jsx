import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid } from '../components'
import headshot from '../images/jacob_headshot.jpg'
import { Image, LayoutBand } from '../components'
import useDeviceWidth from '../scripts/projectUtils'

const Home = () => {
  const { atWidth } = useDeviceWidth()

  return (
    <>
      <div className="jn-color-banner-tall" />
      <LayoutBand>
        <div className="pt-5 px-0 px-md-5">
          <Grid>
            <Image columns={atWidth({ default: 12, lg: 4})} src={headshot} alt="Jacob Nelson" />
            <div columns={atWidth({ default: 12, lg: 8})}>
              <h1>Jacob Nelson</h1>
              <p>Engineering web solutions with precision</p>
            </div>
          </Grid>
          <div className="mt-5 ms-5 text-end">
            <NavLink className="btn btn-primary d-block mt-3 w-fit-content" to="/projects">Get Started</NavLink>
          </div>
        </div>
      </ LayoutBand>
    </>
  )
}

export default Home
