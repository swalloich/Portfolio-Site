import React from "react"
import { useParams, NavLink } from 'react-router'
import { parseDescription } from './util'
import { LayoutBand, Tag } from "../../components"
import { useProjectContext } from "./ProjectProvider"

const ProjectView = () => {
  const { projectId } = useParams()
  const { projects, tags } = useProjectContext()

  const project = projects[projectId]

  return (
    <LayoutBand className="mt-4">
      <NavLink to="/projects" className="jn-font-gray">&larr; Back to Projects</NavLink>
      <h1 className="mt-3">{project.title}</h1>
      <div className="mt-3 d-flex flex-wrap gap-2">
        {project.tags.split(',').map((tag) => {
          return (
            <Tag key={tag}>
              {tags[tag]}
            </Tag>
          )
        })}
      </div>
      <hr className="mx-2" />
      <h2>About the Project</h2>
      {parseDescription(projectId, project.description)}
    </ LayoutBand>
  )
}

export default ProjectView
