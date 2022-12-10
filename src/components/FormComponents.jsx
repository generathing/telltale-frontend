import React from 'react';
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

const PlainInput = styled("input")`
    border-radius: 20px;
    height: 3rem;
    padding-left: 1rem;
    border: 2px solid black;
    background-color: #FEF8EA;
    width: 100%;
    outline: none;
    transition: border ease-in-out 200ms;
    border-color: ${(props) => props.hasError ? "#ff0000" : "black"};

    :focus {
        border-width: 4px;
    }
`;
const Form = styled("form")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    padding: 1rem;
`;
const Label = styled("label")`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: .3rem;
    display: inline-block;
`
const Wrapper = styled("div")`
    height: 100vh;
    width: 100vw;
    padding: 5rem 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
`
const FormControl = styled("div")`
    margin-top: 2rem;
`

const InputsArea = styled("div")`
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const ErrorMessage = styled("span")`
    margin-top: .6rem;
    display: inline-block;
    color: #ff0000;
`

const Submit = styled("input")`
    display: inline-flex;
    align-items: center;
    border: 3px solid black;
    padding: 0 100px;
    max-width: 300px;
    text-align: center;
    font-weight: 800;
    margin: 0;
    text-decoration: none;
    border-radius: 15px;
    background: black;
    color: #ffffff;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 200ms ease, color 100ms ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover,
    &:focus {
        background: transparent;
        color: black;
    }

    &:focus {
        outline-offset: -4px;
    }

    &:active {
        background: transparent;
        transform: scale(0.9);
    }  

`
const PrimaryButton = styled("button")`
    display: inline-flex;
    align-items: center;
    border: 3px solid black;
    padding: 0 100px;
    max-width: 300px;
    text-align: center;
    font-weight: 800;
    margin: 0;
    text-decoration: none;
    border-radius: 15px;
    background: black;
    color: #ffffff;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 200ms ease, color 100ms ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover,
    &:focus {
        background: transparent;
        color: black;
    }

    &:focus {
        outline-offset: -4px;
    }

    &:active {
        background: transparent;
        transform: scale(0.9);
    }  

`
const ToggleWrapper = styled("div")`
    display: flex;
`

const CheckedToggleDescription = styled("span")`
    opacity: 0;
    transition: 200ms opacity ease-in-out;
`

const ToggleInput = styled("input")`
    height: 0;
	width: 0;
	visibility: hidden;
    display: none;

    &:checked + label {
	    background: black;
    }

    &:checked + span {
	    opacity: 1;
    }

    &:checked + label::after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
        border: 2px solid #FEF8EA;
        background: #FEF8EA;
    }
`

const ToggleLabel = styled("label")`
    cursor: pointer;
	text-indent: -9999px;
	width: 100px;
    background: #FEF8EA;
	display: inline-flex;
	border-radius: 100px;
	position: relative;
    font-size: 2rem;
    border: 2px solid black;

    &::after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 2.2rem;
        height: 2.2rem;
        background: black;
        border: 2px solid black;
        border-radius: 90px;
        transition: 0.3s;
    }

    &:active::after {
	    width: 2rem;
    }
`



export { PlainInput, Form, Label, Wrapper, FormControl, InputsArea, ErrorMessage, Submit, PrimaryButton, ToggleInput }