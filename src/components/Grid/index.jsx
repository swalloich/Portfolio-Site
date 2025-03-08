/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({ children, gap, ...props }) => {
  const gridCss = css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    box-sizing: border-box;
    width: 100%;
  `
  const gapClass = gap ? `gap-${gap}` : ''
  const modifiedChildren = React.Children.map(children, (child) => 
      <div css={css`grid-column: span ${child.props.columns};`}>
        {child}
      </div>
  )

  return (
    <div css={gridCss} className={gapClass} {...props}>
      {modifiedChildren}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.arrayOf(PropTypes.string),
  gap: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
}

export default Grid