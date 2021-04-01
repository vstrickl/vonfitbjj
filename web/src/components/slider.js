import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss"

import CoverImg from 'gatsby-background-image';
import Slider from "react-slick";

const BannerImg = styled(CoverImg)`
  margin: 0 40px;
`

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
  }

  const data = useStaticQuery(graphql`
    query SliderQuery {
      coverImg: strapiCoverImg {
        cta_url
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

  const coverImg = data.coverImg

  return (
    <BannerImg
      Tag="section"
      fixed={coverImg.cover_img.childImageSharp.fixed}
    >
      <Slider {...settings}>
        <LeadWrapper>
          <Headline>
            {coverImg.headline}
          </Headline>
          <SubHeadline>
            {coverImg.subheadline}
          </SubHeadline>
          <a
            href={coverImg.cta_url}
            class="btn btn-warning m-4"
            role="button"
          >
            CTA
          </a>
        </LeadWrapper>
      </Slider>
    </BannerImg>
  )
}