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

const TheHeader = ({ children }) => {
  return <Wrapper>
    <h1>
      <Link to="/">LOGO</Link>
    </h1>
    <ul className="gnb">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Wrapper>
}

export default TheHeader