import React from "react"
import styled from "styled-components"

import Layout from "./components/layout"
import Letter from "./components/Letter"

const LetterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Layout>
      <LetterWrapper>
        <Letter />
      </LetterWrapper>
    </Layout>
  );
}
