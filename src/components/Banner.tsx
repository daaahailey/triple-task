/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { TripleLogoImg, PlayStoreImg, AppStoreImg } from '../images'

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

const AboutText = css`
  font-size: 36px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  letter-spacing: -1px;
  & > strong {
    font-weight: 700;
  }
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

const AwardedIcons = css`
  display: flex;
`

const PlayStore = css`
  box-sizing: border-box;
  height: 54px;
  display: flex;
  margin: 5px 0;
  align-items: center;
  padding-left: 62px;
  margin-right: 39px;
  background: url(${PlayStoreImg}) no-repeat;
  background-size: 54px 54px;
  color: rgba(58, 58, 58, 0.8);
  line-height: 22px;
  font-size: 14px;
  font-weight: bold;
`
const AppStore = css`
  box-sizing: border-box;
  height: 54px;
  display: flex;
  margin: 5px 0;
  align-items: center;
  padding-left: 62px;
  background: url(${AppStoreImg}) no-repeat;
  background-size: 54px 54px;
  color: rgba(58, 58, 58, 0.8);
  line-height: 22px;
  font-size: 14px;
  font-weight: bold;
`

export const Banner = () => {
  return (
    <section css={BannerContainer}>
      {/* <h2 className="a11y-text-hidden">트리플 앱 소개</h2> */}
      <ul>
        <li css={AboutTriple}>
          <p css={AboutText}>
            <strong>700만 명</strong>의 여행자
          </p>
          <p css={AboutText}>
            <strong>100만 개</strong>의 여행 리뷰
          </p>
          <p css={AboutText}>
            <strong>470만 개</strong>의 여행 일정
          </p>
        </li>
        <li css={AwardedIcons}>
          <p css={PlayStore}>
            2018 구글 플레이스토어
            <br aria-hidden="true" />
            올해의 앱 최우수상 수상
          </p>
          <p css={AppStore}>
            2018 애플 앱스토어
            <br aria-hidden="true" />
            오늘의 여행앱 선정
          </p>
        </li>
        <li css={TripleLogo}>
          <p css={DateText}>2021년 12월 기준</p>
        </li>
      </ul>
    </section>
  )
}
