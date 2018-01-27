import React from "react"
import styled from 'styled-components'
import Navigation from './Navigation'
import OptInForm from "../Utility/MailChimp";

class MainHeader extends React.Component {
  getHeader() {
    if (this.props.location) {
      if (this.props.location.pathname === '/') {
        return (
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img className='dart-logo' src={this.props.logo} width='150px' />
              <div className='heading'>
                <h1>Dart 30</h1>
                <h4>Dart for JS developers.</h4>
              </div>
              <Tagline>
                <p>From the basics of Dart programming to DOM manipulation.</p>
                <p>This is what you need to know to build the web with Google's alternative to JavaScript.</p>
              </Tagline>
            </Hero>
          </IndexHeadContainer>
        )
      } else {
        return (
          <SiteContainer>
            <Navigation />
          </SiteContainer>
        )
      }
    }
    return <div></div>
  }

  render() {
    return this.getHeader()
  }
}

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: 25px ${props => props.theme.sitePadding} 100px;
  
`

const SiteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.brand};
  height: 100%;
  padding:  25px;
`

const Hero = styled.div`
  padding: 50px 25px 0;
  margin: auto;
  display: grid;
  grid-template-areas: 
    "dart-logo heading" 
    "tagline tagline";
  max-width: 850px;
  
  .dart-logo {
    grid-area: dart-logo;
    justify-self: end;
  }
  
  .heading {
  padding-left: 30px;
  grid-area: heading;
  }
  
  & > div >h1 {
    font-weight: 600;  
    font-size: 7rem;
    margin: 0;
  }
  & >div >h4 {
    font-weight: 300;
    font-size: 3rem;
    margin: 0;
  }
`

const Tagline = styled.div`
    color: white;
    font-size: 2rem;
    grid-area: tagline;
    margin: ${props => props.theme.sitePadding} 0 0 0;
    
    & p {
      margin: 0;
      text-align: center;
    }
`

export default MainHeader


