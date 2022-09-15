import * as React from "react"
import { Link } from "gatsby"
import TheHeader from "../components/The/Header"


const IndexPage = () => {
  return (
    <main>
      <TheHeader />
      <Link to="/about">Go To About</Link>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
