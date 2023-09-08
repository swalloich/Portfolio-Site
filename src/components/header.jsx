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
                            <h1>Jacob Nelson</h1>
                        </div>
                        <div>
                            <MainNavBar>
                                <ul>
                                    <li>
                                        <NavLink to='' activeClassName="active">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='about' activeClassName="active">
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='projects' activeClassName="active">
                                            Projects
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='contact' activeClassName="active">
                                            Contact
                                        </NavLink>
                                    </li>
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