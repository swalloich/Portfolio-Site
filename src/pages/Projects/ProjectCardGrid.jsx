import React from "react"
import propTypes from "prop-types"
import ProjectCard from "./ProjectCard"
import Grid from "../../components/Grid"
import { projectShape } from './util'
import useDeviceWidth from "../../scripts/projectUtils"

const ProjectCardGrid = (props) => {
  const { projects = [] } = props
  const { atWidth } = useDeviceWidth()

  const projectCards = projects.length > 0 ? (
    projects.map((project) => (
      <ProjectCard
        key={project.projectId}
        project={project}
        columns={atWidth({default: 12, md: 6, lg: 4})}
      />
    ))
  ) : (
    <p>No projects found.</p>
  )

  return (
    <Grid>
      {projectCards}
    </Grid>
  )
}

ProjectCardGrid.propTypes = {
  projects: propTypes.arrayOf(projectShape),
}

export default ProjectCardGrid;
