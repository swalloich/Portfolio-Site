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
                            <div className='full-card half-card-md'>
                                <h2 className='mb-0'>This Site</h2>
                                <div className='card-body'>
                                    <h4 className='mb-0'>Description</h4>
                                    <p className='mt-0'>
                                        This website was designed, built, and deployed by me.
                                        Bootstrap was used to make building a site that is
                                        responsive easier. React was used to build it, so that I
                                        could take advantage of templating. This site is hosted on
                                        an Oracle Cloud always free teir instance that is managed
                                        by me as well.
                                        
                                    </p>
                                </div>
                                <h4>Skills & Technologies Used</h4>
                                <div className='gutter-container flex-gap-xsm'>
                                    <Tag>React</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>Bootstrap 5</Tag>
                                    <Tag>JavaScript</Tag>
                                    <Tag>Oracle Cloud</Tag>
                                    <Tag>Git</Tag>
                                    <Tag>Responsive Design</Tag>
                                </div>
                            </div>
                            <div className='full-card half-card-md'>
                                <h2 className='mb-0'>CSS Cleanup</h2>
                                <div className='card-body'>
                                    <h4 className='mb-0'>Source</h4>
                                    <a className='jn-font-pop-blue mt-1' href="https://education.byu.edu/" target='_blank' rel='noreferrer'>education.byu.edu</a>
                                    <h4 className='mb-0'>Description</h4>
                                    <p className='mt-0'>
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
                                <h4 className='mb-2'>Skills & Technologies Used</h4>
                                <div className='gutter-container flex-gap-xsm'>
                                    <Tag>SASS</Tag>
                                    <Tag>node.js</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>PHP</Tag>
                                    <Tag>Bootstrap 5</Tag>
                                    <Tag>Drupal</Tag>
                                    <Tag>Git</Tag>
                                    <Tag>Twig</Tag>
                                </div>
                            </div>
                            <div className='full-card half-card-md'>
                                <h2 >McKay School Directory</h2>
                                <div className='card-body'>
                                    <h4 className='my-0'>Source</h4>
                                    <a className='jn-font-pop-blue mt-1' href="https://education.byu.edu/directory" target='_blank' rel='noreferrer'>McKay School Directory</a>
                                    <h4 className='mb-0'>Description</h4>
                                    <p className='mt-0'>
                                        The site's directory page worked fine on desktop, but was
                                        near impossible to use on mobile devices. The original was
                                        a table automatically generated by Drupal. I crafted a new
                                        directory page using divs and Bootstrap that responded to
                                        view width, making it usable both on desktop and mobile.
                                    </p>
                                </div>
                                <h4 className='mb-2'>Skills and Technologies Used</h4>
                                <div className='gutter-container flex-gap-xsm'>
                                    <Tag>Bootstrap 5</Tag>
                                    <Tag>Drupal</Tag>
                                    <Tag>Twig</Tag>
                                    <Tag>Responsive Design</Tag>
                                </div>
                            </div>
                            <div className='full-card half-card-md'>
                                <h2>Speech & Language Clinic</h2>
                                <div className='card-body'>
                                    <h4 className='my-0'>Source</h4>
                                    <a className='jn-font-pop-blue mt-1 d-block' href='https://education.byu.edu/speech-and-language-clinic' target='_blank' rel='noreferrer'>Speech & Language Clinic</a>
                                    <ul className='mt-0'>
                                        <li>
                                            <a className='jn-font-pop-blue ms-3 d-block' href="https://education.byu.edu/speech-and-language-clinic/apply" target='_blank' rel='noreferrer'>/apply</a>
                                        </li>
                                        <li>
                                            <a className='jn-font-pop-blue ms-3 d-block' href="https://education.byu.edu/speech-and-language-clinic/about" target='_blank' rel='noreferrer'>/about</a>
                                        </li>
                                        <li>
                                            <a className='jn-font-pop-blue ms-3 d-block' href='https://education.byu.edu/speech-and-language-clinic/resources'>/resources</a>
                                        </li>
                                    </ul>
                                    <h4 className='mb-0'>Description</h4>
                                    <p className='mt-0'>
                                        I Constructed a series of pages from screenshots provided
                                        by our UX team. I implemented responsive design techniques
                                        to ensure an optimal experience on both desktop and mobile
                                        platforms.
                                    </p>
                                </div>
                                <h4 className='mb-2'>Skills and Technologies Used</h4>
                                <div className='gutter-container flex-gap-xsm'>
                                    <Tag>Bootstrap 5</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>HTML 5</Tag>
                                    <Tag>Responsive Design</Tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}