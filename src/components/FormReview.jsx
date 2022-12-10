import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import * as FormComponents from "./FormComponents"
import { navigate } from "gatsby"
import updateAction from "../update/updateAction";

export default function CustomisationFormStepOne() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });

    console.log(state)

    return (
        <div></div>
    );
}
