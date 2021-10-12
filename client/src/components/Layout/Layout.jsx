import React from "react"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  )
}
