import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

// page imports
import Home from '../pages/home';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import NotFound from '../pages/not-found';

class AppRouter extends React.Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        const { children } = this.props;

        return (
            <Router>
                { children }
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        );
    }
}

export default AppRouter;