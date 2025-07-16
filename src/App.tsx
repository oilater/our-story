import { css } from '@emotion/react'

export default function App() {
  return (
    <div css={container}>
      <h1>Our Story</h1>
    </div>
  )
}

const container = css`
  margin: 0 auto;
  max-width: 960px;
`