import * as React from "react"
import Layout from "../components/Layout"
import HeroStoryPreview from "../components/HeroStoryPreview"

const IndexPage = () => {
  return (
    <Layout>
      <h1>TELL<br />TALE</h1>
      <HeroStoryPreview></HeroStoryPreview>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
