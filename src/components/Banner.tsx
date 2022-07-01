import React from 'react'

export const Banner = () => {
  return (
    <section>
      <h2 className="a11y-text-hidden">트리플 앱 소개</h2>
      <ul>
        <li>
          <p>
            <strong>700만 명</strong>의 여행자
          </p>
          <p>
            <strong>100만 개</strong>의 여행 리뷰
          </p>
          <p>
            <strong>470만 개</strong>의 여행 일정
          </p>
        </li>
        <li>
          <p>
            2018 구글 플레이스토어
            <br aria-hidden="true" />
            올해의 앱 최우수상 수상
          </p>
          <p>
            2018 애플 앱스토어
            <br aria-hidden="true" />
            오늘의 여행앱 선정
          </p>
        </li>
        <li>2021년 12월 기준</li>
      </ul>
    </section>
  )
}
