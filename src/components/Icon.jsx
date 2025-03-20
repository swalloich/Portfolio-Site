/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const iconSizes = {
  sm: '20px',
  md: '30px',
  lg: '65px'
}

export default function Icon({ src, alt='', size='lg' }) {
  const iconCss = css`
    width: ${iconSizes[size]};
    height: ${iconSizes[size]};
  `
  return <img css={iconCss} src={src} alt={alt} />
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}