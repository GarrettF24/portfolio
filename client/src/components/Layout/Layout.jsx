import React from "react"
import Nav from "../Nav/Nav"

export default function Layout(props) {
  return (
    <>
      <Nav />
      <>
        <div className="container">{props.children}</div>
      </>
    </>
  )
}
