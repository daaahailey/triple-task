/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { AnimatedTextProps } from '../@types/global/AnimatedTextProps'

const AboutText = css`
  font-size: 36px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  letter-spacing: -1px;
  & > strong {
    font-weight: 700;
  }
`

export const AnimatedText = ({
  number,
  unitText,
  targetText,
}: AnimatedTextProps) => {
  return (
    <p css={AboutText}>
      <strong>
        {number}
        {unitText}
      </strong>
      {targetText}
    </p>
  )
}
