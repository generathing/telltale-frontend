import { min } from "lodash"
import * as React from "react"
import styled from "@emotion/styled";
import "../Styles/global.css"

const BackgroundWrapper = styled("div")`
    background-color: #F59124;
    min-width: 100vw;
    min-height: 100vh;
`


const Layout = ({ children }) => {
    return (
        <BackgroundWrapper>
            {children}
        </BackgroundWrapper>
    )
}

export default Layout

