import React from "react"
import { useParams, NavLink, Link } from 'react-router'
import { parseDescription } from './util'
import { LayoutBand, Tag } from "../../components"
import { useProjectContext } from "./ProjectProvider"

const ProjectView = () => {
  const { projectId } = useParams()
  const { projects, tags } = useProjectContext()

  const project = projects[projectId]
  let statusString = ''
  if (project?.projectStatus) {
    if (project.projectStatus === 'Active Maintenance' || project.projectStatus === 'In Progress') {
      statusString = project.projectStatus
    } else {
      const projectDate = new Date(project.projectStatus)
      const longDate = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(projectDate)
      statusString = `Last worked on in ${longDate} ${projectDate.getFullYear()}`
    }
  }

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
      {project?.projectUrls && (
        <>
          <h2>Project Links</h2>
          <ul>
            {project.projectUrls?.map((projectUrl) => (
              <div key={projectUrl.path}>
                <li>
                  <Link to={projectUrl.path}>{projectUrl.name}</Link>
                </li>
                {projectUrl?.subPaths && (
                  <ul>
                    {projectUrl?.subPaths && projectUrl?.subPaths?.map((subPath) => {
                      const baseUrl = projectUrl.path
                      return (
                        <li key={subPath.path}>
                          <Link to={`${baseUrl}${subPath.path}`}>{subPath.name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
            )}
          </ul>
        </>
      )}
      {statusString && (
        <>
          <hr className="mx-2" />
          <p>
            <b>Project status: </b>
            {statusString}
          </p>
        </>
      )}
    </ LayoutBand>
  )
}

export default ProjectView
