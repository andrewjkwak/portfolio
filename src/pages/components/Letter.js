import React from "react"
import styled from "styled-components"
import Typing from "react-typing-animation"

const LetterWrapper = styled.main`
  flex: 1 0 0;
  font-size: 20px;
  font-family: 'Bentham', serif;
  width: 500px;
  margin: 0 auto;
`
const Letter = () => (
  <LetterWrapper>
    <Typing speed={20}>
      <span>Hi !</span>
      <br />
      <br />
      <p>I am a Fullstack Developer, living in Brooklyn, NY.</p>
      <p>Obsessed with writing clean and beautiful code.</p>
      <p>If you want to chit-chat, grab a coffee, rob a bank, hit me up.</p>
      <p style={{ float: "right" }}>- Andrew <span style={{ textDecoration: "underline red wavy" }}>Kwak</span></p>
    </Typing>

  </LetterWrapper>
)

export default Letter