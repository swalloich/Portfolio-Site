/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

export default function Separator({ color='rgba(0,0,0,0.1)', direction='vertical' }) {
  const separatorCss = css`
    ${direction === 'vertical' ? 'height: 100%;' : 'width: 100%;'}
    border: 2px solid ${color};
  `
  return <div css={separatorCss} />
}

Separator.propTypes = {
  color: PropTypes.string,
  direction: PropTypes.oneOf(['vertical', 'horizontal'])
}