import React, { Component } from 'react'
import styled from 'styled-components'

class HighlightedParagraph extends Component {

  render() {
    const { children } = this.props;
    return(
      <Paragraph>
        <div>{children}</div>
      </Paragraph>
    )
  }
}

const Paragraph = styled.div`
  background: black;
  color: white;
  width: 100vw;
  padding: ${props => props.theme.sitePadding};
  div {
  max-width: ${props => props.theme.contentWidthLaptop}; 
  margin: auto;
  }
`

export default HighlightedParagraph