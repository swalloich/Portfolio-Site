/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import colors from '../styles/colors'

const HamburgerButton = (props) => {
  const { onClick, isMenuOpen = false } = props
  const buttonRef = useRef(null)

  const hamburgerButtonCss = css`
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  height: 40px;
  width: 40px;
  border: 2px solid ${colors.superLightBlue};
  background-color: transparent;
  color: ${colors.superLightBlue};
  border-radius: 5px;

  @media (max-width: 600px) {
    display: flex;
  }
`

  const barsCss = css`
    display: ${isMenuOpen ? 'none' : 'flex'};
    align-items: ${isMenuOpen ? 'flex-start' : 'center'};
  `

  const closeCss = css`
    display: ${isMenuOpen ? 'flex' : 'none'};
    align-items: ${isMenuOpen ? 'center' : 'flex-start'};
  `

  useEffect(() => {
    const button = buttonRef.current
    const timeout = (isMenuOpen) ? 100 : 200
    button.disabled = true
    setTimeout(() => {
      button.disabled = false
    }, timeout)
  }, [isMenuOpen])

  return (
    <button ref={buttonRef} css={hamburgerButtonCss} type='button' onClick={onClick}>
      <div css={barsCss}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div css={closeCss}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </button>
  )
}

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
}

export default HamburgerButton