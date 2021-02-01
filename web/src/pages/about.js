import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"

export default function About() {
  return (
    <Layout>
      <Header headerText="About Me" />
      <p>
        My sappy "About Me" story...
      </p>
    </Layout>
  )
}