import React from "react"
import styled from "styled-components"

import TheHeader from "../The/Header"

const Wrapper = styled.div`
`

const LayoutDefault = ({ children }) => {
  return <Wrapper>
    <TheHeader />

    <main>
      { children }
    </main>
  </Wrapper>
}

export default LayoutDefault