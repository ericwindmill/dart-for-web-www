import React, { Component } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import SEO from '../components/SEO/SEO'
import * as config from '../../data/SiteConfig'
import TableOfContents from '../components/Layout/TableOfContents'

class ContentIndex extends Component {

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
          <h1>Dart 30</h1>
          <TableOfContents
            posts={postEdges}
            contentsType="lesson"
            chapterTitles={['Dart 30']}
            context='dart30'
          />
        </main>
      </div>
    )
  }
}

export default ContentIndex

const ContentIndexContainer = styled.div``

/* eslint no-undef: "off"*/
export const contentQuery = graphql`
  query dart30Query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            type
            lesson
            chapter
            context
          }
        }
      }
    }
  }
`
