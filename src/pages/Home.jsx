/** @jsxImportSource @emotion/react */
import { creepyHandshake, jacobHeadshot } from '../images'
import { Grid, GridCell, Image, LayoutBand, Row, Tag } from '../components'
import useDeviceWidth from '../scripts/projectUtils'
import { NavLink } from 'react-router'

const Home = () => {
  const { atWidth } = useDeviceWidth()

  return (
    <>
      <div className="jn-color-banner-tall" />
      <LayoutBand className='p-sm-5 py-5'>
        <Grid gap={atWidth({ default: 0, md: 5 })} rowGap={5}>
          <GridCell columns={atWidth({ default: 12, md: 6, lg: 8 })} verticalAlign='center' horizontalAlign='center'>
            <h1 className='jn-font-5 text-center'>Jacob Nelson</h1>
            <Row className='d-flex gap-2' justify='center'>
              <Tag size='medium'>React</Tag>
              <Tag size='medium'>JavaScript</Tag>
              <Tag size='medium'>Node.js</Tag>
              <Tag size='medium'>Express</Tag>
              <Tag size='medium'>PHP</Tag>
            </Row>
          </GridCell>
          <Image columns={atWidth({ default: 12, md: 6, lg: 4 })} src={jacobHeadshot} alt="Jacob Nelson" />
        </Grid>
      </ LayoutBand>
      <div className='jn-bg-super-light-blue-t'>
        <LayoutBand className='p-5 text-center'>
          <h2>Engineering Web Solutions with Precision</h2>
          <p>
            I am a full stack web developer with a passion for creating web
            applications that are both functional and visually appealing. I
            have experience with a variety of technologies including React,
            Node.js, Express, and MongoDB. I am always looking for new
            projects to work on and new technologies to learn.
          </p>
          <Row justify='center' className='mt-4'>
            <NavLink className='btn btn-primary' to='/projects'>
              Learn about my projects
            </NavLink>
          </Row>
        </LayoutBand>
      </div>
      <LayoutBand className='p-sm-5 py-5'>
        <Grid gap={atWidth({ default: 0, md: 5 })} rowGap={5}>
          <Image columns={atWidth({ default: 12, md: 6, lg: 4 })} src={creepyHandshake} alt='Placeholder' />
          <GridCell columns={atWidth({ default: 12, md: 6, lg: 8 })} verticalAlign='center'>
            <h2>Let's Build Something Great Together</h2>
            <p>
              Looking for a dedicated and skilled developer to help bring your
              ideas to life? I am always open to new opportunities and
              collaborations. Let's connect and disccuss how I can contribute
              to your team.
            </p>
            <NavLink className='btn btn-primary' to='/contact'>
              Get in Touch
            </NavLink>
          </GridCell>
        </Grid>
      </LayoutBand>
    </>
  )
}

export default Home
