import React from 'react';
import Tag from "../components/Tag";

const Projects = () => {
    return (
        <main className='d-flex justify-content-center pt-5'>
            <div className='jn-container'>
                <h1 className='mb-5'>Projects</h1>
                <div className='gutter-container flex-gap-md flex-direction-column flex-direction-md-row'>
                    <div className='full-card half-card-lg'>
                        <h2 className='mb-3'>This Site</h2>
                        <div className='card-body'>
                            <h3>Description</h3>
                            <ul>
                                <li>
                                    Designed a simple and powerful site to comprehensively
                                    communicate showcase my dozens of skills in a minimal
                                    number of pages.
                                </li>
                                <li>
                                    Outlined a vision for static and functional portfolio site
                                    components to minimize development time.
                                </li>
                            </ul>
                        </div>
                        <h3>Skills & Technologies Used</h3>
                        <div className='mt-2 gutter-container flex-gap-xsm'>
                            <Tag>React</Tag>
                            <Tag>CSS</Tag>
                            <Tag>Bootstrap 5</Tag>
                            <Tag>JavaScript</Tag>
                            <Tag>Oracle Cloud</Tag>
                            <Tag>Git</Tag>
                            <Tag>Responsive Design</Tag>
                        </div>
                    </div>
                    <div className='full-card half-card-lg'>
                        <h2 className='mb-3'>Education Site Search</h2>
                        <div className='card-body'>
                            <h3>Description</h3>
                            <ul>
                                <li>
                                    Enhanced site searching using API developed using PHP in
                                    Drupal along with Google's custom search API.
                                </li>
                                <li>
                                    Constructed a search page allowing fast access to thousands
                                    of pages.
                                </li>
                                <li>
                                    Wrote JavaScript leveraging a custom API while considering
                                    reusability.
                                </li>
                            </ul>
                        </div>
                        <h3>Skills & Technologies Used</h3>
                        <div className='mt-2 gutter-container flex-gap-xsm'>
                            <Tag>PHP</Tag>
                            <Tag>Drupal</Tag>
                            <Tag>JavaScript</Tag>
                            <Tag>CSS</Tag>
                            <Tag>SASS</Tag>
                        </div>
                    </div>
                    <div className='full-card half-card-lg'>
                        <h2 className='mb-3'>CSS Cleanup</h2>
                        <div className='card-body'>
                            <h3>Source</h3>
                            <p>
                                <a className='jn-font-pop-blue' href="https://education.byu.edu/" target='_blank' rel='noreferrer'>education.byu.edu</a>
                            </p>
                            <h3>Description</h3>
                            <ul>
                                <li>
                                    Collaborated with a team of developers to design an
                                    improved stylesheet structure, improving page load times by
                                    approximately three times.
                                </li>
                                <li>
                                    Directed a team of 4 other developers toward an ideal
                                    solution to a complex problem.
                                </li>
                            </ul>
                        </div>
                        <h3>Skills & Technologies Used</h3>
                        <div className='mt-2 gutter-container flex-gap-xsm'>
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
                    <div className='full-card half-card-lg'>
                        <h2 className='mb-3'>McKay School Directory</h2>
                        <div className='card-body'>
                            <h3>Source</h3>
                            <p>
                                <a className='jn-font-pop-blue' href="https://education.byu.edu/directory" target='_blank' rel='noreferrer'>McKay School Directory</a>
                            </p>
                            <h3>Description</h3>
                            <p>
                                The site's directory page worked fine on desktop, but was
                                near impossible to use on mobile devices. The original was
                                a table automatically generated by Drupal. I crafted a new
                                directory page using divs and Bootstrap that responded to
                                view width, making it usable both on desktop and mobile.
                            </p>
                        </div>
                        <h3>Skills and Technologies Used</h3>
                        <div className='mt-2 gutter-container flex-gap-xsm'>
                            <Tag>Bootstrap 5</Tag>
                            <Tag>Drupal</Tag>
                            <Tag>Twig</Tag>
                            <Tag>Responsive Design</Tag>
                        </div>
                    </div>
                    <div className='full-card half-card-lg'>
                        <h2 className='mb-3'>Speech & Language Clinic</h2>
                        <div className='card-body'>
                            <h3 className=''>Source</h3>
                            <a className='jn-font-pop-blue mt-1 d-block' href='https://education.byu.edu/comd/speech-and-language-clinic' target='_blank' rel='noreferrer'>Speech & Language Clinic</a>
                            <ul className='mt-0'>
                                <li>
                                    <a className='jn-font-pop-blue ms-3 d-block' href="https://education.byu.edu/comd/speech-and-language-clinic/apply" target='_blank' rel='noreferrer'>/apply</a>
                                </li>
                                <li>
                                    <a className='jn-font-pop-blue ms-3 d-block' href="https://education.byu.edu/comd/speech-and-language-clinic/about" target='_blank' rel='noreferrer'>/about</a>
                                </li>
                                <li>
                                    <a className='jn-font-pop-blue ms-3 d-block' href='https://education.byu.edu/comd/speech-and-language-clinic/resources' target='_blank' rel="noreferrer">/resources</a>
                                </li>
                            </ul>
                            <h3>Description</h3>
                            <p>
                                I Constructed a series of pages from screenshots provided
                                by our UX team. I implemented responsive design techniques
                                to ensure an optimal experience on both desktop and mobile
                                platforms.
                            </p>
                        </div>
                        <h3>Skills and Technologies Used</h3>
                        <div className='mt-2 gutter-container flex-gap-xsm'>
                            <Tag>Bootstrap 5</Tag>
                            <Tag>CSS</Tag>
                            <Tag>HTML 5</Tag>
                            <Tag>Responsive Design</Tag>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;
