import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// bootstrap
import "bootstrap/dist/css/bootstrap-grid.min.css";

export class Contact extends React.Component {
    render () {
        return (
            <>
                <main className='d-flex justify-content-center'>
                    <div className='jn-container'>
                        <h1>Contact Me!</h1>
                        <h2>When can I be reached?</h2>
                        <div className='mx-auto col-12 col-sm-8'>
                            <div className='row'>I can be contacted during the following hours:</div>
                            <div className='row'>
                                <div className='col-12 col-sm-3 ms-2 ms-sm-0'>Monday:</div>
                                <div className='col-12 col-sm-9'>8:00am - 11:00am, 12:00pm - 10:00pm</div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-3 ms-2 ms-sm-0'>Tuesday:</div>
                                <div className='col-12 col-sm-9'>8:00am - 10:00pm</div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-3 ms-2 ms-sm-0'>Wednesday:</div>
                                <div className='col-12 col-sm-9'>8:00am - 11:00am, 12:00pm - 10:00pm</div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-3 ms-2 ms-sm-0'>Thursday:</div>
                                <div className='col-12 col-sm-9'>8:00am - 10:00pm</div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-3 ms-2 ms-sm-0'>Friday:</div>
                                <div className='col-12 col-sm-9'>8:00am - 11:00am, 12:00pm - 10:00pm</div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-3 ms-2 ms-sm-0'>Saturday:</div>
                                <div className='col-12 col-sm-9'>10:00am - 10:00pm</div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-3 ms-2 ms-sm-0'>Sunday:</div>
                                <div className='col-12 col-sm-9'>Unavailable</div>
                            </div>
                        </div>
                        <h2>Where can I be reached?</h2>
                        <div className='mx-auto col-12 col-md-8'>
                            <div className='row mb-3'>
                                <div className='col-3 d-flex align-items-center'>Email:</div>
                                <div className='col-9'><a href="mailto:nels.jac42@gmail.com">nels.jac42@gmail.com</a></div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-3 d-flex align-items-center'>Linkedin:</div>
                                <div className='col-9'>
                                    <a className='jn-font-linkedin-blue' href='https://linkedin.com/in/nelsjac42' target='_blank' rel='noreferrer'>
                                        <FontAwesomeIcon className='jn-font-xl' icon={icon({name: 'linkedin', style: 'brands'})} />
                                    </a>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-3 d-flex align-items-center'>GitHub:</div>
                                <div className='col-9'>
                                    <a className='jn-font-github-gray' href="https://github.com/swalloich" target='_blank' rel='noreferrer'>
                                        <FontAwesomeIcon className='jn-font-xl' icon={icon({name: 'github', style: 'brands'})} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}