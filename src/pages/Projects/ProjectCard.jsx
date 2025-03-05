import React from "react"
import Card from "../../components/Card"
import Tag from "../../components/Tag"
import { projectShape } from './util'
import propTypes from "prop-types"
import { useProjectContext } from "./ProjectProvider"

const ProjectCard = (props) => {
  const { className, project } = props
  const { tags } = useProjectContext()

  return (
    <Card to={`/projects/${project.projectId}`} title={project.title} className={className}>
      <>
        <h2>{project.title}</h2>
        <hr className="mx-2" />
        <div className="card-body">
          <p>{project.shortDescription}</p>
          <div className="d-flex gap-2 flex-wrap">
            {project.tags.split(',').map((tag) => (
              <Tag key={tag}>
                {tags[tag]}
              </Tag>
            ))}
          </div>
        </div>
      </>
    </Card>
  )
}

ProjectCard.propTypes = {
  className: propTypes.arrayOf(propTypes.string),
  project: projectShape,
}

export default ProjectCard;