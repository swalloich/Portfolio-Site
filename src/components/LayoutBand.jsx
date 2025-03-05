/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const layoutBandCss = css`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

export default function LayoutBand({ children, ...props }) {
  return (
    <div css={layoutBandCss} {...props}>
      {children}
    </div>
  )
}