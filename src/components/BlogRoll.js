import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BlogPreview from "./BlogPreview"

const BlogRoll = () => {
  return (
    <StaticQuery
      query={graphql`
        query BlogQuery {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                  path
                  description
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: posts } = data.allMarkdownRemark;
        return (
          <div>
            {posts.map(({ node: post }) => (
              <BlogPreview key={ post.id } post={ post } />
            ))}
          </div>
        )
      }}
    />
  )
}

export default BlogRoll