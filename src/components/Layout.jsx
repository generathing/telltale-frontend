import { min } from "lodash"
import * as React from "react"
import styled from "@emotion/styled";
import "../Styles/global.css"
import NavBar from "./NavBar";

const BackgroundWrapper = styled("div")`
    background-color: #F59124;
    min-width: 100vw;
    min-height: 100vh;
`


const Layout = ({ children }) => {
    return (
        <BackgroundWrapper>
            <NavBar />
            {children}
        </BackgroundWrapper>
    )
}

export default Layout

