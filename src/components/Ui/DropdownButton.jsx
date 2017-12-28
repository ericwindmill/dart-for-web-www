import React, {Component} from 'react'
import styled from 'styled-components'
import {FaChevronDown} from 'react-icons/lib/fa'

class DropdownButton extends Component {

  render() {
    const {children} = this.props
    return (
      <ButtonContainer
        id={this.props.buttonId}
        onClick={this.props.dropdownCallback}
      >
        {children}
        <FaChevronDown style={iconStyle}/>
      </ButtonContainer>
    )
  }
}

const ButtonContainer = styled.button`
  background-color: inherit;
  color: inherit;
  border: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  
  &:hover {
    background: rgba(173, 210, 235, .2);
    cursor: pointer;
  }
  
  & > h5 {
    margin: 0;
  }
`

const iconStyle = {
  width: '15px',
  height: '15px',
}

export default DropdownButton