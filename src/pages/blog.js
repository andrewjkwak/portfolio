import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import BlogRoll from "../components/BlogRoll"

const BlogWrapper = styled.main`
  width: 40%;
  margin: 0 auto;

  @media (max-width: 950px) {
    width: 100%;
  }

  @media (min-width: 951px) and (max-width: 1222px) {
    width: 50%;
  }
`

const BlogHeaderText = styled.h1`
  text-transform: uppercase;
  letter-spacing: 10px;
`

const Blog = () => {
  return (
    <Layout>
      <BlogWrapper>
        <BlogHeaderText>Blog</BlogHeaderText>
        <BlogRoll />
      </BlogWrapper>
    </Layout>
  )
}

export default Blog