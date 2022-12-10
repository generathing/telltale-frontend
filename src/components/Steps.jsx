import * as React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'

const Wrapper = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
`
const Step = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0.5rem;
	@media (min-width: 576px) {
		flex-direction: ${props => (props.index % 2 === 0 ? 'row' : 'row-reverse')};
		justify-content: space-around;
		align-items: center;
		gap: 6rem;
	}
`
const StepContent = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 1rem;
`
const StepTitle = styled('h2')`
	padding: 0;
	font-size: 2rem;
	font-weight: 600;
`
const StepDescription = styled('p')`
	padding-left: 0.5rem;
	font-size: 1.2rem;
	max-width: 500px;
`
const StepImage = styled('div')`
	width: 100%;
	aspect-ratio: 2/1;
	border-radius: 20px;
	background-image: url('${props => props.thumbnail}');
	background-size: cover;
	background-position: center;
	@media (min-width: 576px) {
		aspect-ratio: 1/1;
	}
	@media (min-width: 768px) {
		width: 400px;
	}
`
export default function StepPreview() {
	const data = useStaticQuery(graphql`
		query Step {
			allFile(filter: { absolutePath: { regex: "/steps/i" } }) {
				edges {
					node {
						childrenMarkdownRemark {
							frontmatter {
								title
								description
								order
								thumbnail
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
		return (
			<Step index={index}>
				<StepImage thumbnail={frontmatter.thumbnail} />
				<StepContent>
					<StepTitle>
						{frontmatter.order}. {frontmatter.title}
					</StepTitle>
					<StepDescription>{frontmatter.description}</StepDescription>
				</StepContent>
			</Step>
		)
	})
	return <Wrapper>{listItems}</Wrapper>
}
