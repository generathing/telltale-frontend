import * as React from 'react'
import Layout from '../components/Layout'
import HeroStoryPreview from '../components/HeroStoryPreview'
import DoubleCta from '../components/DoubleCta'
import Steps from '../components/Steps'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
	width: 100vw;
	max-width: 1200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
	margin: 0 auto;
	padding: 6rem 1rem;
	font-size: 1.2rem;
	@media (min-width: 576px) {
		align-items: start;
		font-size: 1.3rem;
		gap: 3rem;
	}
`

const HeroText = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`
const Hero = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 100%;
	gap: 2rem;
	@media (min-width: 576px) {
		flex-direction: row;
		justify-content: space-between;
		padding-inline: 5rem;
	}
`
const HeroImage = styled('div')`
	width: 500px;
	aspect-ratio: 1/1;
	border-radius: 30px;
	background: url('https://astonishing-mooncake-c0c558.netlify.app/assets/dall%C2%B7e-2022-12-03-15.38.47-a-kid-astronaut-floating-in-space-with-a-teddy-bear-oil-painting.png');
	background-size: cover;
	box-shadow: 1px 2px 10px 0px gray;

	@media (max-width: 767px) {
		display: none;
	}
`
const Heading = styled('h1')`
	@media (min-width: 576px) {
		background-color: transparent;
		line-height: 1;
		padding: 0;
	}
	display: flex;
	padding: 1rem 2rem;
	font-family: 'Poppins', sans-serif;
	font-size: 30px;
`

const SmallHeading = styled('h3')``

const FeaturesList = styled('ul')`
	padding-inline: 2rem;
	@media (min-width: 420px) {
		padding-inline: 3rem;
	}
	li {
		padding-bottom: 0.5rem;
		&::marker {
			font-size: 1.2rem;
		}
		&:nth-child(1) {
			list-style-type: '👧🏼 ';
		}
		&:nth-child(2) {
			list-style-type: '🥷🏻 ';
		}
		&:nth-child(3) {
			list-style-type: '🧑🏽‍🏫 ';
		}
		&:nth-child(4) {
			list-style-type: '✍🏽 ';
		}
	}
`

const IndexPage = () => {
	return (
		<Layout>
			<Wrapper>
				<Hero>
					<HeroText>
						<Heading>The ingredients for the perfect bedtime story:</Heading>
						<FeaturesList>
							<li>
								it features the children as the main character, both in the text
								and in the illustrations
							</li>
							<li>it is tailored to the children's interest</li>
							<li>it revolves around the values that you want to teach</li>
							<li>it is unique and you'll never find another the same</li>
						</FeaturesList>
					</HeroText>
					<HeroImage />
				</Hero>
				<SmallHeading>
					Create unforgettable memories, the first is on us.
				</SmallHeading>
				<DoubleCta mainCta='Tell a story' secondaryCta='Learn more' />
				<HeroStoryPreview />
				<Steps />
			</Wrapper>
		</Layout>
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title>
