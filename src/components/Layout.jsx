import * as React from "react"
import styled from "@emotion/styled"
import "../Styles/global.css"
import NavBar from "./NavBar"
import Sidebar from "./Sidebar"
import { StateMachineProvider, createStore } from "little-state-machine"

const BackgroundWrapper = styled("div")`
	background-color: #f59124;
	min-width: 100vw;
	min-height: 100vh;
`

const Layout = ({ children }) => {
	return (
		<StateMachineProvider>
			<BackgroundWrapper id='outer-container'>
				<Sidebar
					pageWrapId={"page-wrap"}
					outerContainerId={"outer-container"}
				/>
				<div id='page-wrap'>
					<NavBar />

					{children}
				</div>
			</BackgroundWrapper>
		</StateMachineProvider>
	)
}

export default Layout
