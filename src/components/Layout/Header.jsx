import React from "react"
import styled from 'styled-components'
import Navigation from './Navigation'

class MainHeader extends React.Component {
  getHeader() {
    if (this.props.location) {
      if (this.props.location.pathname === '/') {
        return (
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img src={this.props.logo} width='150px' />
              <div>
                <h1>Dart</h1>
                <h4>for web developers</h4>
              </div>
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
  padding: ${props => props.theme.sitePadding};
  text-align: center;
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
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  & div {
  padding-left: 30px;
  }
  & > div >h1 {
    font-weight: 600;  
    font-size: 7rem;
    margin: 0;
    text-align: left;
  }
  & >div >h4 {
    font-weight: 300;
    font-size: 3rem;
    margin: 0;
  }
`

export default MainHeader


