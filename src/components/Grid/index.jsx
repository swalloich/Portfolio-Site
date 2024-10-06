import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Grid = (props) => {
  const { children, className = [], } = props
  const [childrenWithColumns, setChildrenWithColumns] = useState([])

  useEffect(() => {
    const updatedChildren = React.Children.map(children, (child) => {
      if (child.props.columns === undefined) {
        return child
      }
      const classes = child.props.className ? child.props.className : []
      classes.push(`jn-col-${child.props.columns}`)
      return React.cloneElement(child, {
        className: classes,
      })
    })
    setChildrenWithColumns(updatedChildren)
  }, [children])

  return (
    <div className={`jn-grid ${className.join(' ')}`}>
      {childrenWithColumns}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.arrayOf(PropTypes.string),
}

export default Grid