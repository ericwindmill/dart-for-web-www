import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import config from '../../data/SiteConfig'
import MainHeader from '../components/Layout/Header'

class AboutPage extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <main>
          <MainHeader
            siteTitle={config.siteTitle}
            siteDescription={config.siteDescription}
            location={this.props.location}
            logo={config.siteLogo}
          />
          <BodyContainer>
            <AboutContainer>
              <h2>Project Goals</h2>
              <p>
                This site was created as an answer to some sites that I've found
                extremely helpful in my programming career:{' '}
                <a href="https://javacscript.info">JavaScript.Info</a> and{' '}
                <a href="https://elixirschool.com/en/">Elixir School</a> come to
                mind.
              </p>
              <p>
                Because of a job and Google and billion other smart people, I
                somehow ended up having to explore this language that I'd never
                heard of. This project was made to help me deepen my
                understanding, and hopefully help some others along the way.
              </p>
              <p>
                There's plenty of room and usecases for Dart and JavaScript.
                Nothing would make me happier than knowing this site allowed a
                few people to simply explore all the options.
              </p>
              <h2>Contirbute!</h2>
              <p>
                I've found that people in the Dart community are pretty
                passionate about spreading the canon. If you'd like to add to
                lessons or fix some mistakes, please contribute on Github!
              </p>
            </AboutContainer>
          </BodyContainer>
        </main>
      </div>
    )
  }
}

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`

const AboutContainer = styled.div``

export default AboutPage
