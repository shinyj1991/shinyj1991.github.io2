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

const TheHeader = ({ size, children }) => {
  const sizes = {
    sm: "19.2px",
    md: "25.6px",
    bg: "33.6px",
  }

  return <Wrapper>
    <h1>
      <Link to="/">LOGO</Link>
    </h1>
  </Wrapper>
}

export default TheHeader