import React from 'react'
import styled from "@emotion/styled";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config"

const Wrapper = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    max-width: 500px;
`;

const MainCta = styled("button")`
    display: inline-block;
    border: none;
    padding: 1rem 5rem;
    margin: 0;
    text-decoration: none;
    border-radius: 15px;
    background: black;
    color: #ffffff;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease, color 100ms ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover,
    &:focus {
        background: #FEF8EA;
        color: black;
    }

    &:focus {
        outline: 1px solid #fff;
        outline-offset: -4px;
    }

    &:active {
        transform: scale(0.99);
    }  
`

const SecondaryCta = styled("a")`
    font-size: .9rem;
    margin-top: .5rem;
    text-decoration: underline wavy black;
`



export default function DoubleCta({ mainCta, secondaryCta, showSecondary = true }) {
    const testFirebase = () => {

        addDoc(collection(db, "test-form-submission"), {
            stringField: "This is another test"
        })
            .then(() => {
                alert('Message submitted 👍');
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <Wrapper>
            <MainCta onClick={testFirebase}>{mainCta}</MainCta>
            {showSecondary && <SecondaryCta>{secondaryCta}</SecondaryCta>}
        </Wrapper>
    )
}
