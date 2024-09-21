import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import NotFound from '../pages/not-found';

const AppRouter = (props) => {
    const { children } = props;

    return (
        <Router>
            {children}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

AppRouter.propTypes = {
    children: PropTypes.element
}

export default AppRouter;
