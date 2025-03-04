/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Row({ children, justify = "flex-start", align = "start" }) {
  const rowCss = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: ${justify};
    align-items: ${align};
  `

  return <div css={rowCss}>{children}</div>
}