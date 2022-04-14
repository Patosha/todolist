import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    callBack: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {

    const [newTitle, setNewTitle] = useState<string>(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const [edit, setEdit] = useState(false)

    const turnOnHandler = () => {
        setEdit(true)
    }

    const turnOffHandler = () => {
        setEdit(false)
        props.callBack(newTitle)
    }

    return (
        edit
            ? <input autoFocus onBlur={turnOffHandler} onChange={onChangeHandler} value={newTitle}/>
            : <span onDoubleClick={turnOnHandler}>{props.title}</span>
    )
}