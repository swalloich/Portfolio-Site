import React from 'react';

import { Tag } from "../components/tag";

import "../styles/components/cards.css";

import "bootstrap/dist/css/bootstrap-grid.min.css";

export class Projects extends React.Component {
    render() {
        return (
            <>
                <main className='d-flex justify-content-center'>
                    <div className='jn-container'>
                        <h1>Projects</h1>
                        <div className='gutter-container flex-gap-md flex-direction-column flex-direction-md-row'>
                            <div className='small-card'>
                                <h2 className='mb-0'>This Site</h2>
                                <h4 className='mb-0'>Description</h4>
                                <p>
                                    Aside from react itself, and the bootstrap utility classes,
                                    this site was made from scratch by me. This includes the
                                    setup of the Oracle Cloud instance it is hosted on, writing
                                    the css for the header and the rest of the page, and so on.
                                </p>
                                <h4>Skills & Technologies Used</h4>
                                <div className='gutter-container flex-gap-xsm'>
                                    <Tag>React</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>Bootstrap 5</Tag>
                                    <Tag>JavaScript</Tag>
                                    <Tag>Oracle Cloud</Tag>
                                    <Tag>Git</Tag>
                                </div>
                            </div>
                            <div className='small-card'>
                                <h2 className='mb-0'>CSS Cleanup</h2>
                                <div className='row d-flex justify-content-center'>
                                    <div className='row'>
                                        <div className='col-12 col-lg-6 overflow-hidden'>
                                            <h4 className='mb-0'>Source</h4>
                                            <a className='jn-font-pop-blue mt-1' href="https://education.byu.edu/" target='_blank' rel='noreferrer'>education.byu.edu</a>
                                        </div>
                                        <div className='col-12 col-lg-6'>
                                            <h4 className='mb-0'>As of</h4>
                                            <p className='mt-1'>19 September 2023</p>
                                        </div>
                                    </div>
                                    <h4 className='mb-0'>Description</h4>
                                    <p>
                                        Our team determined that our site was suffering in two ways
                                        because of the way out style sheets were structured. These were:
                                    </p>
                                    <ul className='ms-5'>
                                        <li>Decreased page load times</li>
                                        <li>Greater difficulty training new employees</li>
                                    </ul>
                                    <p>
                                        We decided that using sass in our future stylesheets would
                                        remedy both these issues. <br />After the new structure was
                                        decided on, along with a set of rules team members would
                                        be expected to follow going forward, we set our plan into
                                        motion. The result was page load times approximately 3x
                                        faster than before.
                                    </p>
                                </div>
                                <h4>Skills & Technologies Used</h4>
                                <div className='gutter-container flex-gap-xsm'>
                                    <Tag>SASS</Tag>
                                    <Tag>node.js</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>PHP</Tag>
                                    <Tag>Bootstrap 5</Tag>
                                    <Tag>Drupal</Tag>
                                    <Tag>Git</Tag>
                                </div>
                            </div>
                            <div className='small-card'>
                                <h2 className='mb-0'>McKay School Directory</h2>
                                <div className='row'>
                                    <div className='col-11 col-md-12 overflow-hidden'>
                                        <h4 className='mb-0'>Source</h4>
                                        <a className='jn-font-pop-blue mt-1' href="https://education.byu.edu/directory" target='_blank' rel='noreferrer'>McKay School Directory</a>
                                    </div>
                                </div>
                                <h4 className='mb-0'>Description</h4>
                                <p>
                                    The site's directory page worked fine on desktop, but was
                                    near impossible to use on mobile devices. The original was
                                    a table automatically generated by Drupal. I crafted a new
                                    directory page using divs and Bootstrap that responded to
                                    view width, making it usable both on desktop and mobile.
                                </p>
                                <h4>Skills and Technologies Used</h4>
                                <div className='gutter-container flex-gap-xsm'>
                                    <Tag>Bootstrap 5</Tag>
                                    <Tag>Drupal</Tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}