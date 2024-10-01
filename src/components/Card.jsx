import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Card = (props) => {
  const { to = null, onClick = null, children } = props
  const [cardClasses, setCardClasses] = useState(['jn-card'])

  useEffect(() => {
    if (to) {
      setCardClasses((prev) => {
        return prev.concat('clickable')
      })
    } else if (cardClasses.includes('clickable')) {
      setCardClasses((prev) => {
        return prev.filter((c) => c !== 'clickable')
      })
    }
  }, [to])

  return to ? (
    <NavLink to={to} className={cardClasses.join(' ')} onClick={onClick}>
      {children}
    </NavLink>
  ) : (
    <div className={cardClasses.join(' ')} onClick={onClick}>
      {children}
    </div>
  )
}

Card.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element
}

export default Card;
