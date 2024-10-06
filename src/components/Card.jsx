import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Card = (props) => {
  const { to = null, onClick = null, className = [], children } = props
  const cardClasses = ['jn-card', ...className]
  if (to) {
    cardClasses.push('clickable')
  }

  return to ? (
    <NavLink to={to} className={cardClasses.join(' ')} onClick={onClick}>
      {children}
    </NavLink>
  ) : (
    <button className={cardClasses.join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}

Card.propTypes = {
  to: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}

export default Card;
