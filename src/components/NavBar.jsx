import React from 'react'
import styled from "@emotion/styled";

const Logo = styled("span")`
    font-family: "Abril Fatface", serif;
    font-size: 1.5rem;
    color: black;
    padding-left: 1rem;
`;

const NavBarWrapper = styled("div")`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background: #FEF8EA;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 2px solid black;
    z-index: 2;
`

const NavItemsWrapper = styled("nav")`
    display: flex;
    justify-content: end;
    
`

const NavItem = styled("span")`
    @media (max-width: 420px) {
        display: none;
    
    }
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: black;
    padding-right: 50px;

    a {
        color: black;
        text-decoration: none;
    }
`

const navItems =
    [["Item one", "/one"],
    ["Item two", "/two"],
    ["Item Three", "/three"]]

export default function NavBar() {
    return (
        <NavBarWrapper>
            <a href="/"><Logo>TailorTales.ai</Logo></a>
            <NavItemsWrapper>
                {navItems.map((item) => {
                    return (
                        <NavItem key={item}>
                            <a href={item[1]}>
                                {item[0]}
                            </a>
                        </NavItem>
                    )
                })}
            </NavItemsWrapper>
        </NavBarWrapper>
    )
}
