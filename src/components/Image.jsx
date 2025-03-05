/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Image({ src, alt='', ...props }) {
  const imageCss = css`
    max-width: 100%;
    width: 100%;
    height: auto;
  `
  return <img css={imageCss} src={src} alt={alt} {...props} />
}