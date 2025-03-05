import React from "react"
import propTypes from "prop-types"
import ProjectCard from "./ProjectCard"
import { projectShape } from './util'
import useDeviceWidth from "../../scripts/projectUtils"
import { useProjectContext } from "./ProjectProvider"
import { Grid, LayoutBand } from "../../components"

const ProjectCardGrid = () => {
  const { atWidth } = useDeviceWidth()
  const { projects } = useProjectContext()

  const projectCards = Object.values(projects).length > 0 ? (
    Object.values(projects).map((project) => (
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
    <LayoutBand className="mt-5">
      <Grid>
        {projectCards}
      </Grid>
    </LayoutBand>
  )
}

ProjectCardGrid.propTypes = {
  projects: propTypes.arrayOf(projectShape),
}

export default ProjectCardGrid;
