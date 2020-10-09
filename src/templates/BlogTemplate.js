import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const BlogPostWrapper = styled.article`
  width: 40%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 950px) {
    width: 100%;
  }

  @media (min-width: 951px) and (max-width: 1222px) {
    width: 50%;
  }
`

const BlogPostHeader = styled.div`
  h1 {
    font-size: 30px;
  }

  time, p {
    font-size: 15px;
    color: #888888;
    margin: 0 30px;
  }
`

const BlogContent = styled.main`
  margin: 50px 0;
  font-size: 18px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <BlogPostWrapper>
        <BlogPostHeader>
          <h1>{frontmatter.title}</h1>
          <time>{frontmatter.date}</time>
          <p>{frontmatter.description}</p>
        </BlogPostHeader>
        <BlogContent dangerouslySetInnerHTML={{ __html: html }}>

        </BlogContent>
      </BlogPostWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`