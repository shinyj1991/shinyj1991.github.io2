import React from "react"
import styled from "styled-components"

import TheHeader from "../The/Header"
import GlobalStyles from "../GlobalStyles"

const Wrapper = styled.div`
`

const LayoutDefault = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <TheHeader />

        <main>
          { children }
        </main>
      </Wrapper>
    </>
  )
}

export default LayoutDefault