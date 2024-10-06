import React from "react"
import Card from "../../components/Card"
import Tag from "../../components/Tag"
import { projectShape, tags } from './util'
import propTypes from "prop-types"

const ProjectCard = (props) => {
  const { className, project } = props

  const tagCollection =
    project
      ? (
        project.tags.split(',').map((tag) => {
          const matching = tags.find((t) => t.value === tag)
          return (
            <Tag key={tag}>
              {matching ? matching.label : tag}
            </Tag>
          )
        })
      ) : (
        ''
      )

  return (
    <Card to={`/projects/${project.projectId}`} title={project.title} className={className}>
      <>
        <h2>{project.title}</h2>
        <hr className="mx-2" />
        <div className="card-body">
          <p>{project.shortDescription}</p>
          <div className="d-flex gap-2 flex-wrap">
            {tagCollection}
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