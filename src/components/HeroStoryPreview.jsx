import * as React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled("div")`
	display: flex;
	width: 100%;
	gap: 1rem;
	overflow: scroll;
	padding: 1rem;
	margin-top: 2rem;
`

const Card = styled("div")`
	width: 80vw;
	aspect-ratio: 1/1;
	border-radius: 20px;
	overflow: hidden;
	background-color: #fef8ea;
	box-shadow: 1px 2px 10px 0px gray;
	@media (min-width: 420px) {
		width: 300px;
	}
	,
	&:first-child {
		margin-right: 1rem;
	}
`

const TextContainer = styled("div")`
	overflow: hidden;
	position: relative;
	padding: 1rem;
	height: 100%;
	p {
		font-size: 1rem;
		white-space: pre-line;
		padding: 0 15px;
	}
`
const TextOverlay = styled("div")`
	width: 100%;
	height: 100%;
	position: absolute;
	inset: 0;
	background: linear-gradient(
		0deg,
		rgba(254, 248, 234, 1) 0%,
		rgba(254, 248, 234, 0) 50%
	);
`
const HeroBlock = styled("div")`
	display: flex;
`

export default function HeroStoryPreview() {
	const data = useStaticQuery(graphql`
		query HeroStory {
			allFile(filter: { absolutePath: { regex: "/hero-story/i" } }) {
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
		const frontmatter = node.node.childrenMarkdownRemark[0].frontmatter
		const content = node.node.childrenMarkdownRemark[0].internal.content
		return (
			<HeroBlock key={frontmatter.title}>
				<Card>
					<img src={frontmatter.thumbnail} alt={frontmatter.title} />
				</Card>
				<Card>
					<TextContainer>
						<TextOverlay />
						<p>{`${content}`}</p>
					</TextContainer>
				</Card>
			</HeroBlock>
		)
	})
	return <Wrapper>{listItems}</Wrapper>
}
