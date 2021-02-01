import React from "react"

import Slider from "../components/slider";
import Layout from "../components/layout"

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Layout>
        <Slider />
    </Layout>
  )
}