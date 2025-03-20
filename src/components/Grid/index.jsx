/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import PropTypes from 'prop-types'
import GridCell from './GridCell'

/**
 * Grid component
 * @param {JSX.Element} props.children - The children of the grid
 * @param {gap} props.gap - The gap between the columns and rows. If set, colGap and rowGap will be ignored
 * @param {colGap} props.colGap - The gap between the columns
 * @param {rowGap} props.rowGap - The gap between the rows
 * @param {string} props.className - The class name of the grid
 * @returns {JSX.Element} - The grid component
 */
const Grid = ({ children, className, colGap, gap, rowGap, ...props }) => {
  const gridCss = css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    box-sizing: border-box;
    width: 100%;
  `
  const modifiedChildren = React.Children.map(children, (child) => {
    if (child.type === GridCell) {
      return child
    }
    const columns = child.props.columns || 12
    return (
      <GridCell columns={columns}>
        {child}
      </GridCell>
    )
  })

  if (gap) {
    colGap = gap
    rowGap = gap
  }
  const newClasses = `${className ? className : ''} ${getGapClasses(colGap, rowGap).join(' ')}`
  return (
    <div css={gridCss} className={newClasses} {...props}>
      {modifiedChildren}
    </div>
  )
}

/**
 * Helper function to get gap classes
 * @param {*} colGap - The gap between the columns
 * @param {*} rowGap - The gap between the rows
 * @returns {Array<String} - The gap classes
 */
function getGapClasses(colGap, rowGap) {
  if (!colGap && !rowGap) {
    return []
  }
  if (colGap === rowGap) {
    return [`gap-${colGap}`]
  }
  const colGapClass = `col-gap-${colGap}`
  const rowGapClass = `row-gap-${rowGap}`
  return [colGapClass, rowGapClass]
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.arrayOf(PropTypes.string),
  gap: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  colGap: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  rowGap: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
}

export default Grid