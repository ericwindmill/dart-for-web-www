import React, { Component } from 'react'
import styled from 'styled-components'

///////////// DOC
// Must be passed as children:
// <p> tag with quote
// <a> tag with href attribute and attribution as it's text.

class Blockquote extends Component {
  render() {
    const { children } = this.props
    const quote = children[0].props.children;
    const attrib = children[1].props.children;
    const link = children[1].props.href;

    return (
      <a href={link} target='_blank'>
        <BlockquoteContainer>
          <Quote>{quote}</Quote>
          <Attribution>{attrib}</Attribution>
        </BlockquoteContainer>
      </a>
    )
  }
}

const BlockquoteContainer = styled.div`
  border-left: 2px solid;
`

const Quote = styled.div`
  margin-left: 10px;
`

const Attribution = styled.div`
  margin: 10px 0 0 10px;
  font-style: italic;
`


export default Blockquote