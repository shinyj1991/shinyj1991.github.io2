import React from "react"
import styled from "styled-components"

const Wrapper = styled.h1`
  margin-bottom: 24px;
  font-weight: 700;
  line-height: 1.3;
  color: black;
  word-break: break-all;

  & > a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  & > a:hover {
    color: red;
  }
`

const Title = ({ size, children }) => {
  const sizes = {
    sm: "19.2px",
    md: "25.6px",
    bg: "33.6px",
  }

  return <Wrapper size={sizes[size]}> {children} </Wrapper>
}

export default Title