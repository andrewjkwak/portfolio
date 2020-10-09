import React from "react"
import styled, { keyframes } from "styled-components"

import NavBar from "./NavBar"

const headerAnimation = keyframes`
  to { 
    color: black;
    text-shadow: none;
  }
`

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 25px;
  letter-spacing: 10px;

  @media (max-width: 950px) {
    text-align: center;
    flex-direction: column;
  }
`;

const HeaderText = styled.h1`
  font-family: 'Overpass';
  font-size: 50px;
  text-transform: uppercase;
  font-weight: normal;
  color: white;
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
  animation: ${headerAnimation} 2s ease-out 1s normal forwards;

  @media (max-width: 550px) {
    font-size: 8vw;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>Andrew Kwak</HeaderText>
      <NavBar />
    </HeaderWrapper>
  )
}

export default Header;