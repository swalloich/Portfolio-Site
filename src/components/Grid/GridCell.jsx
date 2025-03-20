/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function GridCell({ children, columns = 12, horizontalAlign = 'start', verticalAlign = 'start' }) {
  const gridCellCss = css`
    align-items: ${horizontalAlign};
    display: flex;
    flex-direction: column;
    grid-column: span ${columns};
    justify-content: ${verticalAlign};
  `

  return (
    <div css={gridCellCss}>
      {children}
    </div>
  )
}