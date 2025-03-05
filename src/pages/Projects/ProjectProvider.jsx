import React, { createContext, useContext, useState } from 'react'

const ProjectContext = createContext()

export function ProjectProvider({ children }) {
  const [currentProject, setCurrentProject] = useState(null)
  const projects = {
    'portfolioProject': {
      projectId: 'portfolioProject',
      title: "This Site",
      shortDescription: "I designed a simple and powerful site to comprehensively demonstrate my many skills.",
      description: "- Designed a simple and powerful site to comprehensively communicate showcase my dozens of skills in a minimal number of pages. - Outlined a vision for static and functional portfolio site components to minimize development time.",
      tags: "react,css,bootstrap,javaScript,oracleCloud,git,responsiveDesign"
    },
    "educationSiteSearch":{
      projectId: "educationSiteSearch",
      title: "Education Site Search",
      projectUrls: [
        {
          path: "https://education.byu.edu/deans/site-search",
          name: "Education Site Search"
        },
      ],
      shortDescription: "I enhanced the education site search by developing an API using PHP and Drupal.",
      description: "- Enhanced site searching using API developed using PHP in Drupal along with Google's custom search API. - Constructed a search page allowing fast access to thousands of pages. - Wrote JavaScript leveraging a custom API while considering reusability.",
      tags: "php,drupal,javaScript,css,sass"
    },
    "cssCleanup": {
      projectId: "cssCleanup",
      title: "CSS Cleanup",
      projectUrls: [
        {
          path: "https://education.byu.edu/",
          name: "Education Site"
        },
      ],
      shortDescription: "I performed a comprehensive cleanup and overhaul of the sits stylesheets.",
      description: "- Collaborated with a team of 4 other develoeprs to clean up and overhaul the CSS on the education.byu.edu site. - Worked with a team to ensure that the site was responsive and accessible. - Used SASS to streamline the CSS and make it more maintainable, improving page load times by apporoximately 3 times.",
      tags: "sass,nodejs,css,php,bootstrap,drupal,git,twig"
    },
    "speechAndLanguageClinic": {
      projectId: "speechAndLanguageClinic",
      title: "Speech & Language Clinic",
      projectUrls: [
        {
          path: "https://education.byu.edu/comd/speech-and-language-clinic",
          name: "Speech & Language Clinic",
          subPaths: [
            { name: "Apply", path: "/apply" },
            { name: "About", path: "/about" },
            { name: "Resources", path: "/resources" }
          ]
        },
      ],
      shortDescription: "I constructed a series of pages for the Speech & Language Clinic from screenshots provided by our UX team.",
      description: "I Constructed a series of pages from screenshots provided by our UX team. I implemented responsive design techniques to ensure an optimal experience on both desktop and mobile platforms.",
      tags: "bootstrap,css,sass,html,responsiveDesign"
    }
  }
  const tags = {
    'bootstrap': 'Bootstrap',
    'sass': 'SASS',
    'css': 'CSS',
    'drupal': 'Drupal',
    'git': 'Git',
    'html': 'HTML',
    'javaScript': 'JavaScript',
    'nodejs': 'Node.js',
    'oracleCloud': 'Oracle Cloud',
    'php': 'PHP',
    'react': 'React',
    'responsiveDesign': 'Responsive Design',
    'twig': 'Twig',
  }

  return (
    <ProjectContext.Provider value={{ currentProject, setCurrentProject, projects, tags }}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProjectContext = () => useContext(ProjectContext)