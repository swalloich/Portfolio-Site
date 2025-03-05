/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

export default function Row({ align = "start", children, justify = "flex-start", ...props }) {
  const rowCss = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: ${justify};
    align-items: ${align};
  `

  return (
    <div css={rowCss} {...props}>
      {children}
    </div>
  )
}

Row.propTypes = {
  align: PropTypes.oneOf(["start", "center", "end", "stretch"]),
  children: PropTypes.node,
  justify: PropTypes.oneOf(["start", "end", "flex-start", "flex-end", "center", "left", "right", "normal", "space-between", "space-around", "space-evenly", "stretch", "safe", "unsafe"]),
}
