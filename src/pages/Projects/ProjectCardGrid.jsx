import React from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "./util"

const ProjectCardGrid = (props) => {
  return (
    <div className='jn-container'>
      <h1 className='mb-5'>Projects</h1>
      <div className='gutter-container gap-4 flex-direction-column flex-direction-md-row'>
        {projects.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCardGrid;
