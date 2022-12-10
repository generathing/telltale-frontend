import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import styled from "@emotion/styled";
import { PrimaryButton } from "./FormComponents"
import { useStateMachine } from "little-state-machine";
import updateAction from "../update/updateAction";
import { navigate } from "gatsby"

const Wrapper = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${(props) => props.pb};
`

const UploadArea = styled("button")`
    width: 70vw;
    height: 250px;
    border-radius: 20px;
    border: 2px dashed black;
    margin: 0 auto;
    background-color: #FEF8EA;
`
const ImageItemWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    margin: 0 auto 1rem;
    align-items: center;

    img {
        width: 70vw;
        height: auto;
        border: 2px solid black;
        border-radius: 20px;
    }

    button {
        background-color: transparent;
        border: none;
        font-weight: 600;
    }
`

const ImageActions = styled("div")`
    display: flex;
    width: 100%;
    justify-content: space-around;

`

export default function ImageUpload() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };

    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = () => {
        const data = { images: images }
        actions.updateAction(data);
        navigate("/create")
    };

    return (
        <Wrapper pb="50px">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg", "jpeg", "png", "webp"]}>
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI
                    <Wrapper>
                        <UploadArea
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps} >
                            Click or Drop here
                        </UploadArea>
                        &nbsp;
                        {imageList.map((image, index) => (
                            <ImageItemWrapper key={index}>
                                <img src={image.data_url} alt="" width="100" />
                                <ImageActions>
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                </ImageActions>
                            </ImageItemWrapper>
                        ))}
                    </Wrapper>
                )}
            </ImageUploading>
            <PrimaryButton type="submit" onClick={onSubmit}>Next</PrimaryButton>
        </Wrapper>
    );
}

