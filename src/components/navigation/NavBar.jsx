/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router'
import { HamburgerButton, NavLinks, useHeaderContext, Row } from '..'
import colors from '../../styles/colors'

const navItemCss = css`
  &:not(:last-child) {
    margin-right: 20px;
  }

  a {
    padding: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: ${colors.textColor};
    font-weight: 600;
    font-size: 16px;

    &.active {
      color: ${colors.popBlue};
    }

    &:visited:not(.active) {
      color: ${colors.textColor};
    }
  }
`

const NavBar = (props) => {
  const { links = [] } = props
  const { isMenuOpen, setIsMenuOpen, toggleMenu } = useHeaderContext()

  return (
    <Row justify="space-between" align="center">
      <NavLinks
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      >
        {links.map((link) => (
          <li css={navItemCss} key={link.path}>
            <NavLink to={link.path} onClick={toggleMenu}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </NavLinks>
      <HamburgerButton onClick={toggleMenu} isMenuOpen={isMenuOpen} />
    </ Row>
  )
}

NavBar.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  menuClick: PropTypes.func,
  navClassName: PropTypes.array,
  ulClassName: PropTypes.array,
}

export default NavBar;
