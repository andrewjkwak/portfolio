import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavBarWrapper = styled.nav`
  list-style-type: none;
  text-decoration: none;
  margin-top: 50px;
  padding: 0;

  @media (max-width: 950px) {
    margin: 0;
  }
`

const NavBarElement = styled.li`
  display: inline-block;
  font-size: 15px;
  padding: 10px;
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
`

const NavBar = () => (
  <NavBarWrapper>
    <NavBarElement><Link to="/">Home</Link></NavBarElement>
    <NavBarElement><Link to="/about">About</Link></NavBarElement>
    <NavBarElement><Link to="/blog">Blog</Link></NavBarElement>
  </NavBarWrapper>
)

export default NavBar