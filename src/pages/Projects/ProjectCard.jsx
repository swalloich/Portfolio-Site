/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Card, Tag } from '../../components'
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
        <div css={css`flex: 1 0;`}>
          <p>{project.shortDescription}</p>
        </div>
        <div className="d-flex gap-2 flex-wrap">
            {project.tags.split(',').map((tag) => (
              <Tag key={tag}>
                {tags[tag]}
              </Tag>
            ))}
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