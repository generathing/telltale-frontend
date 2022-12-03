import * as React from "react"
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled("div")`
    grid-column: center-start / -1;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    overflow: auto;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: .5rem;
    margin-top: 2rem;

    img {
        display: grid;
        place-content: center;
        min-width: 80vw;
        border-radius: 20px;
        border: 3px solid black;
    }
`
const TextContainer = styled("div")`
    background-color: #FEF8EA;
    border-radius: 20px;
    padding: 15px;
    max-height: 10rem;
    overflow: hidden;
    margin-top: 1rem;
    position: relative;

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        white-space: pre-line;
    }
`
const TextOverlay = styled("div")`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, rgba(254,248,234,1) 0%, rgba(254,248,234,0) 50%);
`
const HeroBlock = styled("div")`
    display: flex;
    flex-direction: column;
`

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
                  internal {
                    content
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
        const frontmatter = node.node.childrenMarkdownRemark[0].frontmatter;
        const content = node.node.childrenMarkdownRemark[0].internal.content;
        console.log(content)
        return (
            <HeroBlock>
                <img src={frontmatter.thumbnail} alt={frontmatter.title} />
                <TextContainer>
                    <p>{`${content}`}</p>
                    <TextOverlay />
                </TextContainer>
            </HeroBlock>
        )

    }

    );
    return (
        <Wrapper>{listItems}</Wrapper>
    )
}
