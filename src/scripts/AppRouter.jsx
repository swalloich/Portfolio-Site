import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// page imports
import { Home } from '../pages/home';
import { Projects } from '../pages/projects';
import { Contact } from '../pages/contact';
import { NotFound } from '../pages/not-found';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                { this.props.children }
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRouter;