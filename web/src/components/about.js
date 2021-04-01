import React from "react"
import styled from "styled-components"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Col } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.css'

const AboutTitle = styled.h1`
  text-align: center;
`

const AboutDesc = styled.div`
  text-align: center;
`

export default function About() {

  const data = useStaticQuery(
    graphql`
      query {
        about: strapiAbout {
          about_intro
          about_desc
          about_img {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  const site = data.site
  const about = data.about
  const image = getImage(about.about_img)

  return (
    <div class="row m-5">
      <Col>
        <AboutTitle>{about.about_intro}</AboutTitle>
        <AboutDesc dangerouslySetInnerHTML={{ __html: about.about_desc }} />
        <div class="text-center">
          <a
            href="javascript:$zopim.livechat.window.show();"
            class="btn btn-primary m-4"
            role="button"
          >
            Let's Chat!
          </a>
        </div>
      </Col>
      <Col>
        <GatsbyImage image={image} alt={site.author} />
      </Col>
    </div>
  )
}