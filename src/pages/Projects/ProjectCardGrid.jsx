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
      <h1 className="text-center">Projects</h1>
      <p className="text-center mt-5">From streamlining performance-critical tools to enhancing web accessibility at scale, these projects reflect my commitment to thoughtful engineering and user-first design. Each one showcases a blend of technical rigor, creative problem-solving, and a passion for building things that work — and work well</p>
      <Grid className="my-5" gap={atWidth({default: 3, sm: 4})}>
        {projectCards}
      </Grid>
    </LayoutBand>
  )
}

ProjectCardGrid.propTypes = {
  projects: propTypes.arrayOf(projectShape),
}

export default ProjectCardGrid;
