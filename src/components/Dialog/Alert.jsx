import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.header`
  h1 {
    a {
      color: red;
    }
  }
`

const DialogAlert = ({ children }) => {
  return <Wrapper>
    DialogAlert
  </Wrapper>
}

export default DialogAlert