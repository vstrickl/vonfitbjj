import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.Title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiPost.Author.id}`}>
        {data.strapiPost.Author.username}
      </Link>
    </p>
    <Img fixed={data.strapiPost.Image.childImageSharp.fixed} />
    <p>{data.strapiPost.Content}</p>
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      Title
      Content
      Image {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Author {
        id
        username
      }
    }
  }
`