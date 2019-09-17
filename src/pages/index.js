import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              fields { 
                slug 
              }
              frontmatter {
                background
                category
                date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                description
                title
              }
              timeToRead,
            }
          }
        }
      }
    `
  )

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: { 
          frontmatter: { background, category, date, description, title },
          timeToRead,
          fields: {slug}
        },
      }) => ( 
        <PostItem
          slug={slug}
          title={title}
          description={description}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
