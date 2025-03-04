/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const layoutBandCss = css`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`

export default function LayoutBand({ children, ...props }) {
  return (
    <div css={layoutBandCss} {...props}>
      {children}
    </div>
  )
}