import React from 'react'
import { Routes, Route } from 'react-router'
import ProjectCardGrid from './ProjectCardGrid'
import ProjectView from './ProjectView'
import { ProjectProvider } from './ProjectProvider'

const Projects = () => {
  return (
    <ProjectProvider>
      <Routes>
        <Route path='/' element={
          <ProjectCardGrid />
        } />
        <Route path=':projectId' element={
          <ProjectView />
        } />
      </Routes>
    </ProjectProvider>
  )
}

export default Projects
