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
        <BlockquoteContainer>
          <Quote>{quote}</Quote>
          <a href={link} target='_blank'>
            <Attribution><span>{attrib}</span></Attribution>
          </a>
        </BlockquoteContainer>
    )
  }
}

const BlockquoteContainer = styled.div`
  border-left: 4px solid black;
`

const Quote = styled.div`
  font-size: 2rem;
  margin-left: 10px;
  color: black;
`

const Attribution = styled.div`
  margin: 10px 0 0 10px;
  font-style: italic;
  
  span:hover {
    border-bottom: 1px solid black;
  }
`


export default Blockquote