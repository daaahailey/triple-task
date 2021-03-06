/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { AwardProps } from '../@types/AwardProps'

const AwardStyle = (img: string) => css`
  box-sizing: border-box;
  height: 54px;
  display: flex;
  margin: 5px 0;
  align-items: center;
  padding-left: 62px;
  margin-right: 39px;
  color: rgba(58, 58, 58, 0.8);
  line-height: 22px;
  font-size: 14px;
  font-weight: bold;
  background: url(${img}) no-repeat;
  background-size: 54px 54px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`

export const Award = ({ year, where, award, img }: AwardProps) => {
  return (
    <p css={AwardStyle(img)}>
      {year} {where}
      <br aria-hidden="true" />
      {award}
    </p>
  )
}
