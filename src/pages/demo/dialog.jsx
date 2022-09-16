import * as React from "react"
import LayoutDefault from "../../components/Layout/Default"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 50px;
`

const DemoDialogPage = () => {
  function openAlert() {
    alert('alert')
  }

  return (
    <LayoutDefault>
      <Wrapper>
        <section>
          <p>Alert</p>
          <button onClick={openAlert}>Open Alert</button>
        </section>
      </Wrapper>
    </LayoutDefault>
  )
}

export default DemoDialogPage

export const Head = () => <title>Demo Dialog</title>
