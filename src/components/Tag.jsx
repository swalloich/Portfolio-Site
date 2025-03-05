/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import PropTypes from "prop-types"
import colors from "../styles/colors"

const tagCss = css`
  align-items: center;
  background-color: ${colors.superLightBlueTransparent};
  border: 2px solid ${colors.superLightBlue};
  border-radius: 100rem;
  color: ${colors.textColor};
  display: flex;
  font-size: 12px;
  justify-content: center;
  line-height: 16px;
  padding: 5px 8px;
  width: fit-content;
`

const Tag = (props) => {
  const { children } = props

  return (
    <div css={tagCss}>
      <div>
        {children}
      </div>
    </div>
  );
}

Tag.propTypes = {
  closable: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default Tag