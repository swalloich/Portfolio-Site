import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// stylesheets
import "../styles/utilities/separators.css";

// bootstrap
import "bootstrap/dist/css/bootstrap-grid.min.css";

export class Contact extends React.Component {
    render () {
        return (
            <>
                <main className='d-flex justify-content-center'>
                    <div className='cointainer-fluid'>
                        <div className='row flex-column align-items-center flex-lg-row h-100'>
                            <div className='col-10 col-md-6 col-lg-8 d-flex justify-content-end align-items-center mt-5 mt-lg-0 text-end jn-separator-300-end'>
                                <h1 className='jn-font-l jn-font-xl-lg pe-5'>I can help bring your company's vision to life.</h1>
                            </div>
                            <div className='col-10 col-md-6 col-lg-4 d-flex mt-3 mt-lg-0 align-items-center jn-separator-300-start jn-separator-lg-none'>
                                <div class="ps-5 ps-lg-3">
                                    <h2 className='mt-0'>Find me at:</h2>
                                    <a href="mailto:nels.jac42@gmail.com">nels.jac42@gmail.com</a>
                                    <div className='d-flex align-items-center mt-3'>
                                        <a className='jn-font-linkedin-blue' href='https://linkedin.com/in/nelsjac42' target='_blank' rel='noreferrer'>
                                            <FontAwesomeIcon className='jn-font-axl' icon={icon({name: 'linkedin', style: 'brands'})} />
                                        </a>
                                        <div className='ms-3'>Linkedin</div>
                                    </div>
                                    <div className='d-flex align-items-center mt-3'>
                                        <a className='jn-font-github-logo-color d-flex align-items-center'>
                                            <FontAwesomeIcon className='jn-font-axl' icon={icon({name: 'github', style: 'brands'})} />
                                        </a>
                                        <div className='ms-3'>GitHub</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}