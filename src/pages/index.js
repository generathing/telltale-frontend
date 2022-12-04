import * as React from "react"
import Layout from "../components/Layout"
import HeroStoryPreview from "../components/HeroStoryPreview"
import DoubleCta from "../components/DoubleCta";
import styled from "@emotion/styled";

const Heading = styled("h1")`
  padding-top: 8rem;
  font-family: 'Poppins', sans-serif;
`
const SecondaryHeading = styled("h2")`
  font-family: 'Poppins', sans-serif;
  margin: 1rem 0 1.5rem 0;
`
const FeaturesList = styled("ul")`
  list-style: none;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
    li {
      &::before {
        font-size: 1.5rem;
      }
      &:nth-child(1)::before {
        content: "👧🏼 ";
      }
      &:nth-child(2)::before {
        content: "🥷🏻 ";
      }
      &:nth-child(3)::before {
        content: "🧑🏽‍🏫 ";
      }
      &:nth-child(4)::before {
        content: "✍🏽 ";
      }
    }
`

const IndexPage = () => {
  return (
    <Layout>
      <Heading>The ingredients for the perfect bedtime story:</Heading>
      <FeaturesList>
        <li>it features the children as the main character, both in the text and in the illustrations
        </li>
        <li>it is tailored to the children's interest
        </li>
        <li>it revolves around the values that you want to teach
        </li>
        <li>it is unique and you'll never find another the same
        </li>
      </FeaturesList>
      <SecondaryHeading>Create unforgettable memories, the first is on us.</SecondaryHeading>
      <DoubleCta mainCta="Tell a story" secondaryCta="Learn more" />
      <HeroStoryPreview></HeroStoryPreview>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
