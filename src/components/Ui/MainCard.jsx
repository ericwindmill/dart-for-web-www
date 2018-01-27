import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class MainCardWithImage extends Component {
  render() {
    const { children, link } = this.props
    let finalPath = link
    if (finalPath === undefined) {
      finalPath = '#'
    }
    return (
      <MainCardWithImageContainer>
        <Link to={finalPath}>{children}</Link>
      </MainCardWithImageContainer>
    )
  }
}

export default MainCardWithImage

const MainCardWithImageContainer = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #c0c0c0;

  a {
    & * {
      color: black;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 300ms ease-in-out;
  }

  a:hover {
    border-bottom: none;
    box-shadow: 2px 2px 8px #949494, 4px 4px 16px #949494;
  }

  p {
    width: 80%;
  }
`
