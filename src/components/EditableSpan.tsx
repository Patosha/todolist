import React, {useState} from "react";

type EditableSpanPropsType = {
    title: string
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    let [edit, setEdit] = useState(false)

    const turnOnHandler = () => {
        setEdit(true)
    }

    const turnOffHandler = () => {
        setEdit(false)
    }

    return (
        edit
            ? <input autoFocus onBlur={turnOffHandler} value={props.title}/>
            : <span onDoubleClick={turnOnHandler}>{props.title}</span>
    )
}