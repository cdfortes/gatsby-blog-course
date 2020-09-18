import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPost = () => {
  const post = useStaticQuery(graphql`
    query Post($slug: String) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)

  return (
    <>
      <h1>Title: {post.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }}></div>
    </>
  )
}


export default BlogPost
