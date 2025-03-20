/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import PropTypes from "prop-types"
import colors from "../styles/colors"

export default function Tag({ children, size = 'small', ...props }) {

  let padding = '5px 8px'
  let borderRadius = '100rem' // 100rem makes the border radius a pill shape
  switch (size) {
    case 'medium':
      padding = '6px 12px'
      borderRadius = '8px'
      break
    case 'large':
      padding = '10px 16px'
      borderRadius = '8px'
      break
    default:
      break
  }

  const tagCss = css`
    align-items: center;
    background-color: ${colors.superLightBlueTransparent};
    border: 2px solid ${colors.superLightBlue};
    border-radius: ${borderRadius};
    color: ${colors.textColor};
    display: flex;
    font-size: 12px;
    justify-content: center;
    line-height: 16px;
    padding: ${padding};
    width: fit-content;
  `

  return (
    <div css={tagCss} {...props}>
      <div>
        {children}
      </div>
    </div>
  )
}

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  size: PropTypes.oneOf(["small", "medium", "large"])
}