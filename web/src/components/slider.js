import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss"

import CoverImg from 'gatsby-background-image';
import Slider from "react-slick";

const LeadWrapper = styled.div`
  color: white;
  text-align: center;
`

const Headline = styled.div`
  font-weight: 500;
  font-size: 2.5rem;
`

const SubHeadline = styled.div`
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.8rem;
`

export default function Cover() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const data = useStaticQuery(graphql`
    query SliderQuery {
      site {
        siteMetadata {
          image
        }
      }
      strapiCoverImg {
        headline
        subheadline
        cover_img {
          childImageSharp {
            fixed(width: 1360) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  return (
    <CoverImg
      Tag="section"
      fixed={data.strapiCoverImg.cover_img.childImageSharp.fixed}
    >
      <Slider {...settings}>
        <LeadWrapper>
          <Headline>
            {data.strapiCoverImg.headline}
          </Headline>
          <SubHeadline>
            {data.strapiCoverImg.subheadline}
          </SubHeadline>
        </LeadWrapper>
      </Slider>
    </CoverImg>
  )
}