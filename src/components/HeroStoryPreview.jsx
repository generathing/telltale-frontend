import * as React from "react"
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function HeroStoryPreview() {
    const data = useStaticQuery(graphql`
    query HeroStory {
        allFile(filter: {absolutePath: {regex: "/hero-story/i"}}) {
          edges {
            node {
              childrenMarkdownRemark {
                frontmatter {
                  description
                  order
                  thumbnail
                  title
                }
              }
            }
          }
        }
      }
    `)

    const nodes = data.allFile.edges
    console.log(nodes)
    const listItems = nodes.map((node) => {
        const str = "../../static" + node.node.childrenMarkdownRemark[0].frontmatter.thumbnail
        console.log("../../static" + node.node.childrenMarkdownRemark[0].frontmatter.thumbnail)
        return (
            <StaticImage src={str} alt="A dinosaur" />
        )

    }

    );
    return (
        <div>{listItems}</div>
    )
}
