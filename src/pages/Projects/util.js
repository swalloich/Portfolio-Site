import PropTypes from "prop-types"

const projectShape = PropTypes.shape({
  projectId: PropTypes.string, // recommended in case the projects are loaded using a loop.
  title: PropTypes.string.isRequired,
  projectUrls: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      subPaths: PropTypes.arrayOf(
        PropTypes.shape({
          path: PropTypes.string,
          name: PropTypes.string,
        })
      )
    })
  ),
  shortDescription: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.string,
})

const projects = [
  {
    projectId: 'portfolioProject',
    title: "This Site",
    shortDescription: "I designed a simple and powerful site to comprehensively demonstrate my many skills.",
    description: "- Designed a simple and powerful site to comprehensively communicate showcase my dozens of skills in a minimal number of pages. - Outlined a vision for static and functional portfolio site components to minimize development time.",
    tags: "react,css,bootstrap,javascript,oracleCloud,git,responsiveDesign"
  },
  {
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
  {
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
  {
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
]

const tags = [
  { label: 'Bootstrap', value: 'bootstrap' },
  { label: "SAAS", value: "saas" },
  { label: "CSS", value: "css" },
  { label: "Drupal", value: "drupal" },
  { label: "Git", value: "git" },
  { label: "HTML", value: "html" },
  { label: "JavaScript", value: "javascript" },
  { label: "Node.js", value: "nodejs" },
  { label: "Oracle Cloud", value: "oracleCloud" },
  { label: "PHP", value: "php" },
  { label: "React", value: "react" },
  { label: "Responsive Design", value: "responsiveDesign" },
  { label: "Twig", value: "twig" },
]

/**
 * Takes a string and converts it into an array of paragraphs and lists
 * @param {object} description - The project object to parse
 * @returns 
 */
const parseDescription = (project) => {
  return project.description.split('\n').map((paragraph, pgIdx) => {
    if (paragraph.startsWith('- ')) {
      return (
        <ul key={`${project.projectId}-${pgIdx}`}>
          {paragraph.replace(/ ?- /g, '\n').split('\n').filter(item => item).map((listItem, liIdx) => (
            <li key={`${project.projectId}-${pgIdx}-${liIdx}`}>{listItem}</li>
          ))}
        </ul>
      )
    }
    return <p key={`${project.projectId}-${pgIdx}`}>{paragraph}</p>
  })
}

export { parseDescription, projectShape, projects, tags };
