import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import * as FormComponents from "./FormComponents"
import { navigate } from "gatsby"
import updateAction from "../update/updateAction";
import styled from "@emotion/styled";

const ToggleWrapper = styled("div")`
    display: flex;
    align-items: center;
`

const CheckedToggleDescription = styled("span")`
    opacity: ${(props) => props.visible ? "1" : "0"};
    transition: 500ms opacity ease-in-out;
    margin-left: 1rem;
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
export default function CustomisationFormStepOne() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const [toggleStatus, setToggleStatus] = useState(false)
    const onSubmit = (data) => {
        actions.updateAction(data);
        navigate("/review")
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <FormComponents.Wrapper>
            <FormComponents.Form onSubmit={handleSubmit(onSubmit)}>

                <FormComponents.InputsArea>
                    <FormComponents.FormControl>
                        <FormComponents.Label>What values would you like to teach?</FormComponents.Label>
                        <FormComponents.PlainInput type="text" placeholder="Nature conservation" {...register("values")} />
                    </FormComponents.FormControl>

                    <FormComponents.FormControl>
                        <FormComponents.Label>Shall the story use rhymes? (optional)</FormComponents.Label>
                        <ToggleWrapper>
                            <FormComponents.ToggleInput type="checkbox" id="toggle_checkbox" {...register("rhymes", {
                                onChange: (e) => setToggleStatus(e.target.checked)
                            })} />
                            <ToggleLabel htmlFor="toggle_checkbox">Rhymes</ToggleLabel>
                            <CheckedToggleDescription visible={toggleStatus}>Yes</CheckedToggleDescription>
                        </ToggleWrapper>
                    </FormComponents.FormControl>
                </FormComponents.InputsArea>

                <FormComponents.PrimaryButton type="submit">Next</FormComponents.PrimaryButton>

            </FormComponents.Form>
        </FormComponents.Wrapper >
    );
}
