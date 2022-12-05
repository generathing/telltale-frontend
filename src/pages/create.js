import * as React from "react"
import Layout from "../components/Layout"
import styled from "@emotion/styled";
import CustomisationForm from "../components/CustomisationForm";

const Heading = styled("h1")`
  padding-top: 7rem;
  padding-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`

const IndexPage = () => {
    return (
        <Layout>
            <CustomisationForm />
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
