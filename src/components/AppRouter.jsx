import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRouter = (props) => {
  const { children } = props;

  return (
    <Router>
      {children}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:projectId?' element={<Projects />} />
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
