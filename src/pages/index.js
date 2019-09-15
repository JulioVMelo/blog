import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="teste"
      title="teste"
      description="teste"
      background="purple"
      category="teste"
      date="10 do 10 de 2010"
      timeToRead="10"   />
  </Layout>
)

export default IndexPage
