// React imports
import React from 'react';
import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom';

// page imports
import { About } from '../pages/about';
import { Projects } from '../pages/projects';
import { Contact } from '../pages/contact';
import { NotFound } from '../pages/not-found';

// components
import NavBar from './nav-bar'
import CloseNavLink from './close-nav-link';

// style sheet imports
import "../styles/utility-classes.css";
import "../styles/components/header.css";

import logo from "../images/logo.png";

export class Header extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <header className='header box-shadow-bottom'>
                    <div className='jn-container'>
                        <div className='logo divider-right'>
                            <NavLink to=''>
                                <img src={logo} alt=""></img>
                            </NavLink>
                        </div>
                        <NavBar navBarId="main-nav">
                            <ul>
                                <CloseNavLink target="main-nav">
                                    <NavLink to='' activeclassname="active">
                                        Home
                                    </NavLink>
                                </CloseNavLink>
                                <CloseNavLink target="main-nav">
                                    <NavLink to='projects' activeclassname="active">
                                        Projects
                                    </NavLink>
                                </CloseNavLink>
                                <CloseNavLink target="main-nav">
                                    <NavLink to='contact' activeclassname="active">
                                        Contact
                                    </NavLink>
                                </CloseNavLink>
                            </ul>
                        </NavBar>
                    </div>
                </header>

                <Routes>
                    <Route path='/' element={ <About /> } />
                    <Route path='/projects' element={ <Projects /> } />
                    <Route path='/contact' element={ <Contact /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </BrowserRouter>
        );
    }
}