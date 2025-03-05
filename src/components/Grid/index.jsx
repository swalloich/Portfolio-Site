/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({ children, gap = 3, ...props }) => {
  const gridCss = css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    box-sizing: border-box;
    width: 100%;
  `
  const gapClass = gap >= 0 && gap <= 5 ? `gap-${gap}` : 'gap-1'
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
  gap: PropTypes.number,
}

export default Grid