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

/**
 * Takes a string and converts it into an array of paragraphs and lists
 * @param {object} description - The project object to parse
 * @returns 
 */
const parseDescription = (projectId, description) => {
  return description.split('\n').map((paragraph, pgIdx) => {
    if (paragraph.startsWith('- ')) {
      return (
        <ul key={`${projectId}-${pgIdx}`}>
          {paragraph.replace(/ ?- /g, '\n').split('\n').filter(item => item).map((listItem, liIdx) => (
            <li key={`${projectId}-${pgIdx}-${liIdx}`}>{listItem}</li>
          ))}
        </ul>
      )
    }
    return <p key={`${projectId}-${pgIdx}`}>{paragraph}</p>
  })
}

export { parseDescription, projectShape }
