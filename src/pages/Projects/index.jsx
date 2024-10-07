import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectCardGrid from './ProjectCardGrid'
import ProjectView from './ProjectView'
import { projects } from './util'

const Projects = () => {
  const { projectId } = useParams()
  const [currentProject, setCurrentProject] = useState(null)

  useEffect(() => {
    if (projectId) {
      const project = projects.find((p) => p.projectId === projectId)
      setCurrentProject(project)
      if (project) {
        document.title = project.title
      }
    } else {
      document.title = 'Projects'
      if (currentProject) {
        setCurrentProject(null)
      }
    }
  }, [projectId, currentProject])

  let view = null;
  if (projectId && currentProject) {
    view = <ProjectView project={currentProject} />;
  } else if (projects && projects.length > 0) {
    view = <ProjectCardGrid projects={projects} />;
  } else {
    view = (<p>No projects found.</p>)
  }

  return (
    <main className='d-flex justify-content-center pt-5'>
      <div className="container">
        {view}
      </div>
    </main>
  )
}

export default Projects
