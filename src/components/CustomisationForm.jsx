import React from 'react';
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

const TextInput = styled("input")`
    border-radius: 20px;
    height: 3rem;
    padding-left: 1rem;
    border: 2px solid black;
    background-color: #FEF8EA;
    width: 100%;
    outline: none;
    transition: border ease-in-out 200ms;

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
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const ErrorMessage = styled("span")`
    margin-top: .6rem;
    display: inline-block;
`

const Submit = styled("input")`
    display: inline-block;
    border: 3px solid black;
    padding: 1rem 4rem;
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

export default function CustomisationForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputsArea>
                    <FormControl>
                        <Label>What the hero's name?</Label>
                        <TextInput placeholder="Mila" {...register("name")} />
                    </FormControl>


                    <FormControl>
                        <Label>What's the hero's age?</Label>
                        <TextInput placeholder="2" {...register("exampleRequired", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <ErrorMessage>This field is required</ErrorMessage>}
                    </FormControl>
                </InputsArea>

                <Submit type="submit" />
            </Form>
        </Wrapper>
    );
}