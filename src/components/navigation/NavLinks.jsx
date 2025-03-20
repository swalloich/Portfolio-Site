/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from "prop-types"
import { useHeaderContext } from '..'
import colors from '../../styles/colors'

const NavLinks = (props) => {
  const { children } = props
  const { isMenuOpen, setIsMenuOpen } = useHeaderContext()

  const navLinksCss = css`
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;
      box-shadow: ${isMenuOpen ? '-10px 0 10px 1px rgba(0, 0, 0, 0.5)' : 'none'};
      clip-path: inset( 0px -10px -10px -15px);
    }

    @media (max-width: 576px) {
      display: flex;
      position: fixed;
      left: 100%;
      top: 96px;
      height: 100%;
      justify-content: flex-end;
      align-items: flex-start;

      ul {
        position: fixed;
        flex-direction: column;
        background-color: ${colors.bgGray};
        align-items: end;
        height: 100%;
        width: 50%;
        left: ${isMenuOpen ? '50%' : '100%'};
        transition: left 200ms ease;
      }

      li {
        &:not(:last-child) {
          margin: 0;
        }

        a {
          margin: 5px 40px 5px 0;
          height: 25px;
          box-sizing: content-box;
          min-height: fit-content;
        }
      }
    }
  `

  return (
    <nav css={navLinksCss} onClick={() => setIsMenuOpen(false)}>
      <ul>
        {children}
      </ul>
    </nav>
  );
}

NavLinks.propTypes = {
  children: PropTypes.node.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  navClassName: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  ulClassName: PropTypes.array,
}

export default NavLinks;
