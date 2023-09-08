import React from 'react';
import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom';

import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Contact } from '../pages/contact';

import "../styles/utility-classes.css";
import "../styles/components/header.css";
import { Projects } from '../pages/projects';

import HamburgerButton from "./hamburger-button";

export class Header extends React.Component {
    render () {
        return (
            <>
                <BrowserRouter>
                    <header className='header container box-shadow-bottom'>
                        <div className='logo'>
                            <h1>Logo Here</h1>
                        </div>
                        <div>
                            <nav className='main-nav hidden' id="main-nav">
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
                            </nav>
                            <HamburgerButton data-target="#main-nav"/>
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