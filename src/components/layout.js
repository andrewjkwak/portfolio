import React from "react"
import styled from "styled-components"

import Header from "../components/Header"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 98vh;
  font-family: 'Overpass';
`;

const Layout = ({ children }) => (
  <Container>
    <Header />
    { children }
  </Container>
);

export default Layout;