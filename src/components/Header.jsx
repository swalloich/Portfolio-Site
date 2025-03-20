/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router'
import { logo } from '../images'
import { Icon, LayoutBand, NavBar, Row } from '.'
import colors from '../styles/colors'
import useDeviceWidth from '../scripts/projectUtils'

const headerCss = css`
  display: flex;
  justify-content: center;
  background-color: ${colors.bgGray};
  z-index: 1;
  box-shadow: 0 4px 6px ${colors.boxShadow};

  @media (max-width: 576px) {
    position: sticky;
    top: -1px;
  }
`

const Header = ({ links }) => {
  const { isMenuOpen, setIsMenuOpen } = useHeaderContext()
  const { atWidth } = useDeviceWidth()
  const headerRef = useRef(null)

  const handleOutsideClick = useCallback((e) => {
    if (headerRef.current && !headerRef.current.contains(e.target)) {
      setIsMenuOpen(false)
    }
  }, [setIsMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleOutsideClick, isMenuOpen])

  return (
    <header css={headerCss} ref={headerRef}>
      <LayoutBand className='py-3'>
        <Row justify={atWidth({ default: 'space-between', sm: 'start' })} align='center'>
          <div className={`logo ${atWidth({ default: '', sm: 'divider-right' })}`}>
            <NavLink to='' onClick={() => setIsMenuOpen(false)}>
              <Icon src={logo} size="lg" />
            </NavLink>
          </div>
          {atWidth({})}
          <NavBar links={links} />
        </Row>
      </LayoutBand>
    </header>
  )
}

const HeaderContext = createContext()

export function HeaderProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen])

  return (
    <HeaderContext.Provider value={{ isMenuOpen, setIsMenuOpen, toggleMenu }}>
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeaderContext = () => useContext(HeaderContext)

Header.propTypes = {
  links: PropTypes.array.isRequired
}

export default Header