import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

const query = graphql`
  query {
    allStrapiPost {
      edges {
        node {
          strapiId
          title
          excerpt
          post_img {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiPost.edges.map(post => (
          <li key={post.node.strapiId}>
            <Img fixed={post.node.post_img.childImageSharp.fixed} alt="" />
            <h2>
              <Link to='/'>{post.node.title}</Link>
            </h2>
            <p>{post.node.excerpt}</p>
          </li>
        ))}
      </ul>
    )}
  />
);

export default IndexPage
