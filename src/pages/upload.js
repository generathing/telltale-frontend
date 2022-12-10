import * as React from "react"
import Layout from "../components/Layout"
import styled from "@emotion/styled";
import ImageUpload from "../components/ImageUpload";

const Heading = styled("h1")`
  padding-top: 7rem;
  padding-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`

const IndexPage = () => {
    return (
        <Layout>
            <Heading />
            <ImageUpload />
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Upload Photos</title>
