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
    padding-left: 1.5rem;
    margin-top: 2rem;
`

const Column = styled("div")`
    display: grid;
    place-content: center;
    min-width: 80vw;
    border-radius: 20px;
    border: 2px solid black;
    overflow: hidden;
    background-color: #FEF8EA;

    &:first-child {
        margin-right: 1rem;
    }
`

const TextContainer = styled("div")`
    max-height: 40vh;
    max-height: 290px;
    overflow: hidden;
    position: relative;

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        white-space: pre-line;
        padding: 0 15px;
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
    const listItems = nodes.map((node, index) => {
        const frontmatter = node.node.childrenMarkdownRemark[0].frontmatter;
        const content = node.node.childrenMarkdownRemark[0].internal.content;
        return (
            <HeroBlock key={frontmatter.title}>
                <Column>
                    <img src={frontmatter.thumbnail} alt={frontmatter.title} />
                </Column>
                <Column>
                    <TextContainer>
                        <p>{`${content}`}</p>
                        <TextOverlay />
                    </TextContainer>
                </Column>
            </HeroBlock>
        )

    }

    );
    return (
        <Wrapper>{listItems}</Wrapper>
    )
}
