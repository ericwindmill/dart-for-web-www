import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import MainHeader from '../components/Layout/Header'
import Home from '../components/Pages/Home'
import MainCard from '../components/Ui/MainCard'
import HighlightedParagraph from '../components/Ui/HighlightedParagraph'
import OptInForm from '../components/Utility/MailChimp'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
          <MainHeader
            siteTitle={config.siteTitle}
            siteDescription={config.siteDescription}
            location={this.props.location}
            logo={config.siteLogo}
          />
          <HighlightedParagraph backgroundColor={'#f1f1f1'}>
            <h1>Learn Dart on the Front-End</h1>
            <OptionsContainer>
              <MainCard link={'dart-for-web-developers'}>
                <h2>Dart Language Tour</h2>
                <img
                  className="dart-logo"
                  src={config.siteLogo}
                  alt="dart"
                  width="150px"
                />
                <p>Intro to the Dart Lanugage for JavaScript Developers.</p>
              </MainCard>
              <MainCard link={'welcome-to-dart-30'}>
                <h2>Dart 30</h2>
                <img
                  className="dart-logo"
                  src={config.siteLogo}
                  alt="dart"
                  width="150px"
                />
                <p>Fun, bite-sized lessons to learn web-development in Dart.</p>
              </MainCard>
            </OptionsContainer>
          </HighlightedParagraph>
          <HighlightedParagraph backgroundColor={'black'}>
            <h2>
              Build an app, deploy on <em>Web and Mobile</em>
            </h2>
            <p>
              With the impending release of Flutter beta, Dart may be the future
              of web <em>and</em> mobile development. Follow this tutorial and
              learn how to write your business logic once and share the code
              between a web app and mobile app. <em>Truly</em> write once,
              deploy everywhere.
            </p>
            <h4>
              {' '}
              New WebApp and Flutter Lessons are added weekly. Get notified of
              new lessons. Free Forever.
            </h4>
            <OptInForm />
          </HighlightedParagraph>
        </main>
      </div>
    )
  }
}

export default Index

const OptionsContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: space-between;
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allPostTitles: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            lesson
            chapter
            type
          }
          fields {
            slug
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
