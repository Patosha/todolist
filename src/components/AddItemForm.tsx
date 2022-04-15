import React, {ChangeEvent, useState} from "react";
import {AddButton} from "../AddButton";
import {Input} from "@mui/material";

type AddItemFormPropsType = {
    addTaskHandler: (title: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTaskHandler(trimmedTitle)
            setTitle('')
        } else {
            setError(true)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask();
        }
    }

    return (
        <div>

            <Input defaultValue="Hello world"
                   className={error ? 'error' : ''}
                   value={title}
                   onChange={onChangeHandler}
                //клава
                   onKeyPress={onKeyPressHandler}
            />

            <AddButton
                title={'+'}
                changeFilter={addTask}
            />

            {error && <div className={'error-message'}>Title is required!</div>}
        </div>
    )
}