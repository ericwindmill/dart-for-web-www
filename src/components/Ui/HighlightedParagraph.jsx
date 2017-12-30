import React, { Component } from 'react'
import styled from 'styled-components'

class HighlightedParagraph extends Component {

  render() {
    const background = {
      background: this.props.backgroundColor
    }
    const { children } = this.props;
    return(
      <Paragraph style={background}>
        <div>{children}</div>
      </Paragraph>
    )
  }
}

const Paragraph = styled.div`
 
  color: white;
  width: 100vw;
  padding: 100px ${props => props.theme.sitePadding};
  
  div {
  max-width: ${props => props.theme.contentWidthLaptop}; 
  margin: auto;
  }
`

export default HighlightedParagraph