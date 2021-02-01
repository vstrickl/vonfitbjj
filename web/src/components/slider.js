import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss"

import Slider from "react-slick";

const SliderContainer = styled.div`
  background-image: url(${props => props.img});
  color: white;
  padding: 10rem 0;
  background-size: cover;
  height: 300px;
`

const LeadWrapper = styled.div`
  text-align: center;
  transform: translate(160px, 40px);
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
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <SliderContainer img={data.site.siteMetadata.image}>
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
    </SliderContainer>
  )
}