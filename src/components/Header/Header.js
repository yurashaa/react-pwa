import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  
  height: 2.5rem;
  width: 100%;
  
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  background-color: #ffffff;
  z-index: 9999;
`

const LinkBlock = styled(Link)`
  height: 100%;
  padding: 7px 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  transition: .3s;
  
  &:hover {
    opacity: .4;
  }
  
  @media screen and (max-width: 480px) {
    padding: 7px 20px;
  }
`

const Header = () => {
    return (
        <HeaderBlock>
            <LinkBlock to='/static'>Static</LinkBlock>
            <LinkBlock to='/records'>Records</LinkBlock>
            <LinkBlock to='/form'>Form</LinkBlock>
        </HeaderBlock>
    )
}

export { Header }