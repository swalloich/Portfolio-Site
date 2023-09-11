// React imports
import React from 'react';
import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom';

// page imports
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Contact } from '../pages/contact';
import { Projects } from '../pages/projects';

// components
import MainNavBar from './main-nav-bar'
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
                            <MainNavBar navBarId="main-nav">
                                <ul>
                                    <CloseNavLink target="main-nav">
                                        <NavLink to='' activeClassName="active">
                                            Home
                                        </NavLink>
                                    </CloseNavLink>
                                    <CloseNavLink target="main-nav">
                                        <NavLink to='about' activeClassName="active">
                                            About
                                        </NavLink>
                                    </CloseNavLink>
                                    <CloseNavLink target="main-nav">
                                        <NavLink to='projects' activeClassName="active">
                                            Projects
                                        </NavLink>
                                    </CloseNavLink>
                                    <CloseNavLink target="main-nav">
                                        <NavLink to='contact' activeClassName="active">
                                            Contact
                                        </NavLink>
                                    </CloseNavLink>
                                </ul>
                            </MainNavBar>
                        </div>
                    </header>

                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/about' element={ <About /> } />
                        <Route path='/projects' element={ <Projects /> } />
                        <Route path='/contact' element={ <Contact /> } />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}