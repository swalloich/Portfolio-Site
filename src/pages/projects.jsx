import React from 'react';

import "bootstrap/dist/css/bootstrap-grid.min.css";

export class Projects extends React.Component {
    render () {
        return (
            <>
                <main className='d-flex justify-content-center'>
                    <div className='container'>
                        <h1>Projects</h1>
                        <div className='container'>
                            <h3>CSS Cleanup</h3>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <h4>Description</h4>
                                    <p>
                                        Our team determined that our site was suffering in two ways
                                        because of the way out style sheets were structured. These were:
                                    </p>
                                    <ul>
                                        <li>Decreased page load times</li>
                                        <li>Greater difficulty training new employees</li>
                                    </ul>
                                    <p>
                                        We decided that using sass in our future stylesheets would remedy both these issues. <br/>
                                        After the new structure was decided on, along with a set of rules team members would
                                        be expected to follow going forward,
                                    </p>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <h4>Skills Used</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}