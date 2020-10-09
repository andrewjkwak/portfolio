import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Letter from "../components/Letter"

const LetterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ANDREW KWAK</title>
      </Helmet>
      <LetterWrapper>
        <Letter />
      </LetterWrapper>
    </Layout>
  );
}
