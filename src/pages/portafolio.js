import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

const PortafolioPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const project1 = data?.project1?.childImageSharp?.fixed
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portafolio" />
      <h2>portafolio</h2>
      <br/>
      <div class="portfolio-el">
        <div class="portfolio-image">
        <Image fixed={project1} alt="Proyecto 1"/>
        </div>
        <div class="portfolio-content"></div>
      </div>
      <br/>
      <br/>
      <hr />
      <footer>
        <Bio />
      </footer>
    </Layout>
  )
}

export default PortafolioPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
    project1: file(absolutePath: { regex: "/hektor.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`