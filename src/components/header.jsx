// React imports
import React from 'react';
import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom';

// page imports
import { Home } from '../pages/home';
import { Resume } from '../pages/resume';
import { About } from '../pages/about';
import { Projects } from '../pages/projects';
import { NotFound } from '../pages/not-found';

// components
import NavBar from './nav-bar'
import CloseNavLink from './close-nav-link';

// style sheet imports
import "../styles/utility-classes.css";
import "../styles/components/header.css";

export class Header extends React.Component {
    render () {
        return (
            <>
                <BrowserRouter>
                    <header className='header container box-shadow-bottom'>
                        <div className='logo'>
                            <h1><NavLink to=''>Jacob Nelson</NavLink></h1>
                        </div>
                        <div>
                            <NavBar navBarId="main-nav">
                                <ul>
                                    <CloseNavLink target="main-nav">
                                        <NavLink to='' activeclassname="active">
                                            Home
                                        </NavLink>
                                    </CloseNavLink>
                                    <CloseNavLink target="main-nav">
                                        <NavLink to='about' activeclassname="active">
                                            About
                                        </NavLink>
                                    </CloseNavLink>
                                    <CloseNavLink target="main-nav">
                                        <NavLink to='projects' activeclassname="active">
                                            Projects
                                        </NavLink>
                                    </CloseNavLink>
                                    <CloseNavLink target="main-nav">
                                        <NavLink to='resume' activeclassname="active">
                                            Resume
                                        </NavLink>
                                    </CloseNavLink>
                                </ul>
                            </NavBar>
                        </div>
                    </header>

                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/about' element={ <About /> } />
                        <Route path='/projects' element={ <Projects /> } />
                        <Route path='/resume' element={ <Resume /> } />
                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}