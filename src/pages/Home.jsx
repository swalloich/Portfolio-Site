import React from 'react'
import { NavLink } from 'react-router'
import headshot from '../images/jacob_headshot.jpg'
import { Grid, Image, LayoutBand } from '../components'
import useDeviceWidth from '../scripts/projectUtils'

const Home = () => {
  const { atWidth } = useDeviceWidth()

  return (
    <>
      <div className="jn-color-banner-tall" />
      <LayoutBand>
        <div className="pt-5 px-0 px-md-5">
          <Grid gap={atWidth({ default: 0, md: 5 })}>
            <Image columns={atWidth({ default: 12, md: 5, lg: 4 })} src={headshot} alt="Jacob Nelson" />
            <div columns={atWidth({ default: 12, md: 7, lg: 8 })}>
              <h1 className='jn-font-4'>Jacob Nelson</h1>
              <p className="jn-font-2">Engineering web solutions with precision</p>
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
