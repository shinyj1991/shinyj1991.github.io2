import * as React from "react"
import LayoutDefault from "../components/Layout/Default"
import styled from "styled-components"

const Wrapper = styled.div`
  .about-page {
    color: blue;
  }
`

const AboutPage = () => {
  return (
    <LayoutDefault>
      <Wrapper>
        <div className="about-page">
          About Page
        </div>
      </Wrapper>
    </LayoutDefault>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>
