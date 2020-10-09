import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BlogPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h3 { 
    margin: 0;
    width: 80%;
  }
  span { 
    font-size: 12px;
    margin-top: 5px;
    width: 20%;
  }

  @media (max-width: 725px) {
    flex-direction: column;

    h3 {
      width: 100%;
    }

    span {
      width: 100%;
    }
  }
`

const PreviewDescription = styled.p`
  font-family: Bentham, serif;
  padding: 0 10px;
`


const BlogPreview = ({ post }) => (
  <BlogPreviewWrapper>
    <PreviewHeader>
      <h3><Link to={ post.frontmatter.path }>{ post.frontmatter.title }</Link></h3>
      <span>{ post.frontmatter.date }</span>
    </PreviewHeader>
    <PreviewDescription>{ post.frontmatter.description }</PreviewDescription>
  </BlogPreviewWrapper>
)

export default BlogPreview;