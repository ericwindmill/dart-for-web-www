import React, { Component } from 'react'
import styled from 'styled-components'

class HighlightedParagraph extends Component {
  render() {
    const { backgroundColor } = this.props
    let lightFont = 'black'
    if (backgroundColor === 'black') {
      lightFont = 'white'
    }

    const background = {
      background: this.props.backgroundColor,
      color: lightFont
    }
    const { children } = this.props
    return (
      <Paragraph style={background}>
        <div>{children}</div>
      </Paragraph>
    )
  }
}

const Paragraph = styled.div`
  width: 100vw;
  padding: 100px ${props => props.theme.sitePadding};

  div {
    max-width: ${props => props.theme.contentWidthLaptop};
    margin: auto;
  }
`

export default HighlightedParagraph
