import React from "react"
import Tag from "../../components/Tag"
import { projectShape, tags } from './util'

const ProjectView = (props) => {
  const { project } = props;

  const tagCollection = project.tags.split(',').map((tag) => {
    return (
      <Tag key={tag}>
        {tags.find((t) => t.value === tag).label}
      </Tag>
    )
  })

  const description = project.description.split('\n').map((paragraph, pgIdx) => {
    if (paragraph.startsWith('- ')) {
      return (
        <ul key={`${project.projectId}-${pgIdx}`}>
          {paragraph.replace('- ', '\n').split('\n').map((listItem, liIdx) => (
            <li key={`${project.projectId}-${pgIdx}-${liIdx}`}>{listItem}</li>
          ))}
        </ul>
      )
    }
    return <p key={`${project.projectId}-${pgIdx}`}>{paragraph}</p>
  })

  return (
    <>
      <h1>{project.title}</h1>
      <div className="mt-3 d-flex gap-2">
        {tagCollection}
      </div>
      <hr className="mx-3" />
      <h2>About the Project</h2>
      {description}
    </>
  )
}

ProjectView.propTypes = {
  project: projectShape,
}

export default ProjectView
