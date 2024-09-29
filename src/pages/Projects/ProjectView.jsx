import React, { useEffect, useState } from "react"
import Tag from "../../components/Tag"
import { projectShape, tags, parseDescription } from './util'

const ProjectView = (props) => {
  const { project } = props
  const [description, setDescription] = useState(null)
  const [tagCollection, setTagCollection] = useState(null)

  useEffect(() => {
    if (project.description) {
      setDescription(parseDescription(project))
    }
    if (project.tags) {
      setTagCollection(
        project.tags.split(',').map((tag) => {
          const matching = tags.find((t) => t.value === tag)
          return (
            <Tag key={tag}>
              {matching ? matching.label : tag}
            </Tag>
          )
        })
      )
    }
  }, [project])

  return (
    <>
      <h1>{project.title}</h1>
      <div className="mt-3 d-flex flex-wrap gap-2">
        {tagCollection}
      </div>
      <hr className="mx-2" />
      <h2>About the Project</h2>
      {description}
    </>
  )
}

ProjectView.propTypes = {
  project: projectShape,
}

export default ProjectView
