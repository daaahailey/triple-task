/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const AboutText = css`
  font-size: 36px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  letter-spacing: -1px;
  & > strong {
    font-weight: 700;
  }
`
interface AnimatedTextType {
  id?: number
  number: number
  unitText: string
  targetText: string
}

export const AnimatedText = ({
  number,
  unitText,
  targetText,
}: AnimatedTextType) => {
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
