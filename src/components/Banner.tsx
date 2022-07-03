/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { TripleLogoImg, PlayStoreImg, AppStoreImg } from '../images'
import { AnimatedTextProps } from '../@types/AnimatedTextProps'
import { AwardProps } from '../@types/AwardProps'

import { AnimatedText } from './AnimatedText'
import { Award } from './Award'

const BannerContainer = css`
  position: relative;
  box-sizing: border-box;
  display: flex;
  padding: 150px 0 64px 623px;
  margin: 0 auto;
`

const AboutTriple = css`
  position: relative;
  width: 427px;
  margin-bottom: 50px;
`

const TripleLogo = css`
  position: absolute;
  left: 0;
  top: 150px;
  width: 400px;
  height: 388px;
  background: url(${TripleLogoImg}) no-repeat;
  background-size: contain;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
`
const DateText = css`
  position: absolute;
  bottom: 92px;
  left: 50%;
  transform: translateX(-50%);
`

const AwardList = css`
  display: flex;
`

const indicatorData = [
  { id: 0, number: 700, unitText: '만 명', targetText: '의 여행자' },
  { id: 1, number: 100, unitText: '만 개', targetText: '의 여행 리뷰' },
  { id: 2, number: 470, unitText: '만 개', targetText: '의 여행 일정' },
]

const awardsData = [
  {
    id: 0,
    year: 2018,
    where: '구글 플레이스토어',
    award: '올해의 앱 최우수상 수상',
    img: PlayStoreImg,
  },
  {
    id: 1,
    year: 2018,
    where: '애플 앱스토어',
    award: '오늘의 여행앱 선정',
    img: AppStoreImg,
  },
]

export const Banner = () => {
  return (
    <section css={BannerContainer}>
      {/* <h2 className="a11y-text-hidden">트리플 앱 소개</h2> */}
      <ul>
        <li css={AboutTriple}>
          {indicatorData.map((item: AnimatedTextProps) => (
            <AnimatedText
              key={item.id}
              number={item.number}
              unitText={item.unitText}
              targetText={item.targetText}
            />
          ))}
        </li>
        <li css={AwardList}>
          {awardsData.map((item: AwardProps) => (
            <Award
              key={item.id}
              year={item.year}
              where={item.where}
              award={item.award}
              img={item.img}
            />
          ))}
        </li>
        <li css={TripleLogo}>
          <p css={DateText}>2021년 12월 기준</p>
        </li>
      </ul>
    </section>
  )
}
