import React from "react";

const Button = (props) => {
  const { href, onClick, className, children } = props;

  const classList = () => {
    let list = 'button ';
    if (className) { list += ` ${className}`; }
    return list;
  }

  return (
    <a href={href} onClick={onClick} className={classList()}>
      {children}
    </a>
  )
}

Button.propTypes = {
  href: String,
  onClick: Function,
  className: String,
  children: String
}

export default Button;
