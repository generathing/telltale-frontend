import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import * as FormComponents from "./FormComponents"
import { navigate } from "gatsby"
import updateAction from "../update/updateAction";

export default function CustomisationFormStepOne() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        navigate("/customise")
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <FormComponents.Wrapper>
            <FormComponents.Form onSubmit={handleSubmit(onSubmit)}>

                <FormComponents.InputsArea>
                    <FormComponents.FormControl>
                        <FormComponents.Label>What the hero's name?</FormComponents.Label>
                        <FormComponents.PlainInput hasError={errors.name} placeholder="Mila" {...register("name", { required: true, pattern: /^[A-Za-z]+$/ })} />
                        {errors.name?.type == 'required' && <FormComponents.ErrorMessage>This field is required!</FormComponents.ErrorMessage>}
                        {errors.name?.type == 'pattern' && <FormComponents.ErrorMessage>You must enter a name!</FormComponents.ErrorMessage>}
                    </FormComponents.FormControl>


                    <FormComponents.FormControl>
                        <FormComponents.Label>What's the hero's age?</FormComponents.Label>
                        <FormComponents.PlainInput type="number" hasError={errors.age} placeholder="2" {...register("age", { required: true, valueAsNumber: true, })} />
                        {/* errors will return when field validation fails  */}
                        {errors.age && <FormComponents.ErrorMessage>This field is required!</FormComponents.ErrorMessage>}
                    </FormComponents.FormControl>

                    <FormComponents.FormControl>
                        <FormComponents.Label>Does the hero have some particular interests? (optional)</FormComponents.Label>
                        <FormComponents.PlainInput placeholder="Magic, deep see creatures" {...register("interests")} />
                        {/* errors will return when field validation fails  */}
                    </FormComponents.FormControl>
                </FormComponents.InputsArea>



                <FormComponents.PrimaryButton type="submit" >Next</FormComponents.PrimaryButton>

            </FormComponents.Form>
        </FormComponents.Wrapper>
    );
}
