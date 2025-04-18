import React from 'react'
import { Routes, Route } from 'react-router'
import ProjectCardGrid from './ProjectCardGrid'
import ProjectView from './ProjectView'
import { ProjectProvider } from './ProjectProvider'
import { Helmet } from 'react-helmet'

const Projects = () => {
  return (
    <ProjectProvider>
      <Helmet>
        <title>Projects - Jacob Nelson</title>
        <meta name="description" content="Explore the projects of Jacob Nelson, showcasing skills in React, Node.js, and more." />
      </Helmet>
      <Routes>
        <Route path='/' element={<ProjectCardGrid />} />
        <Route path=':projectId' element={<ProjectView />} />
      </Routes>
    </ProjectProvider>
  )
}

export default Projects
