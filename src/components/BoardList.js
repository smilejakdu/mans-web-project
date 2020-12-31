import React, {useCallback, useState, useEffect, useRef} from 'react';
import {WriteContainer, WriteBtn , TextArea} from './AddBoard.styled'
import TextareaAutosize from 'react-textarea-autosize';

const AddBoard = (props) => {
    const imageInput = useRef();

    const submitButton = useCallback(() => {

    }, [])

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <>
            <WriteContainer>
                <div>
                    <button className="btn btn-primary" onClick={onClickImageUpload}>이미지 업로드</button>
                </div>
                <TextArea
                    type="text"
                    name="content"
                    placeholder="Content"
                    required
                />
                <WriteBtn className="btn btn-primary" onClick={submitButton}>button</WriteBtn>
            </WriteContainer>
        </>
    );
};

export default AddBoard;
