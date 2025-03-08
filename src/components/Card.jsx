/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import PropTypes from "prop-types"
import { Link, NavLink } from "react-router"
import colors from "../styles/colors"

export default function Card({ children, onClick, to, ...props }) {
  const cardCss = css`
    align-items: stretch;
    display: flex;
    border: 2px solid ${colors.superLightBlue};
    border-radius: 20px;
    box-sizing: border-box;
    color: ${colors.textColor} !important;
    flex-direction: column;
    padding: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.025);
    }

    :last-child {
      margin-bottom: 0;
    }
  `

  if (to?.startsWith('/')) {
    return (
      <NavLink css={cardCss} to={to} onClick={onClick} {...props}>
        {children}
      </NavLink>
    )
  }
  if (!to) {
    return (
      <button css={cardCss} onClick={onClick} {...props}>
        {children}
      </button>
    )
  }
  return (
    <Link css={cardCss} to={to} onClick={onClick} {...props}>
      {children}
    </Link>
  )
}

Card.propTypes = {
  to: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}
