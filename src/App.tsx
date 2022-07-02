/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { Banner } from './components/Banner'

const Container = css`
  display: flex;
  min-width: 1200px;
  margin: 0 auto;
`

function App() {
  return (
    <main css={Container}>
      <Banner />
    </main>
  )
}

export default App
