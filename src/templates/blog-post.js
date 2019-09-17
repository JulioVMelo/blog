import React from 'react'
import {graphql} from 'gatsby'

const BlogPost = ({data}) => {
  const post = data.markdownRemark

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
    </>
  )
}

export const query = graphql`
  query Post($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BolgPost
