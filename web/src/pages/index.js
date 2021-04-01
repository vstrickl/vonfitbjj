import * as React from "react"

import Slider from "../components/slider";
import Layout from "../components/layout"
import About from "../components/about"

export default function Home() {

  return (
    <Layout>
      <Slider />
      <About />
    </Layout>
  )
}