import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Row } from 'reactstrap'

import "bootstrap/dist/css/bootstrap.min.css"

const FooterWrapper = styled.footer`
  margin-top: 2rem;
  text-align: center;
`

const SocialWrapper = styled.div`
  flex: 0 0 2%;
  max-width: 8.333333%;
  margin: 0 5px;
`

export default function Footer() {

  const data = useStaticQuery(
    graphql`
      query {
        social: allStrapiSocialMedia {
          edges {
            node {
              social_url
              social_account
              social_icon {
                childImageSharp {
                  fixed(width: 40) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const social = data.social.edges

  return (
    <FooterWrapper>
      <div class="row justify-content-md-center">
        <p>
          Built by<a href="https://vonstrick.herokuapp.com/"> Von</a> © {new Date().getFullYear()}, with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> and <a href="https://strapi.io/">Strapi</a>
        </p>
      </div>
      <div class="row justify-content-md-center">
        {social.map(image => (
          <SocialWrapper>
            <Link to={image.node.social_url}>
              <Img fixed={image.node.social_icon.childImageSharp.fixed} alt={image.node.social_account} />
            </Link>
          </SocialWrapper>
        ))}
      </div>
    </FooterWrapper>
  )
}