import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Helmet } from 'react-helmet'
import "bootstrap/dist/css/bootstrap-grid.min.css"
import EmailForm from './EmailForm'

const Contact = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Contact - Jacob Nelson</title>
        <meta name="description" content="Contact Jacob Nelson, a software developer with an enthusisam for high performing software solutions." />
      </Helmet>
      <div className='row flex-column align-items-center flex-md-row h-100 mt-2 mt-sm-5 mx-2 mx-md-0'>
        <div className='col-12 col-md-8 d-flex justify-content-end align-items-center mt-5 mt-lg-0 text-end jn-separator-300-end'>
          <h1 className='jn-font-2 jn-font-xl-4 pe-4 pe-lg-5 ms-0'>I can help bring your company's vision to life.</h1>
        </div>
        <div className='col-12 col-md-4 d-flex mt-3 mt-lg-0 align-items-center jn-separator-300-start jn-separator-md-none'>
          <div className="ps-4 ps-md-1">
            <h2 className='mt-0'>Find me on:</h2>
            <div className='d-flex align-items-center mt-3'>
              <a className='d-flex align-items-center' href='https://linkedin.com/in/nelsjac42' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon className='jn-font-3 jn-font-linkedin-blue' icon={faLinkedin} />
                <div className='ms-3 text-white'>Linkedin</div>
              </a>
            </div>
            <div className='d-flex align-items-center mt-3'>
              <a className='d-flex align-items-center' href="https://github.com/swalloich" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className='jn-font-3 jn-font-github-logo-color' icon={faGithub} />
                <div className='ms-3 text-white'>GitHub</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5'>
        <p className="jn-font-super-light-blue text-center">or</p>
      </div>
      <EmailForm className="mt-5" />
    </div>
  )
}

export default Contact
