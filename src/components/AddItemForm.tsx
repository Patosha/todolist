import Button from "../Button";
import React, {useState} from "react";

type AddItemFormPropsType = {
    todolistId: string
    addTask: (todolistID: string, title: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(props.todolistId, trimmedTitle)
            setTitle('')
        } else {
            setError(true)
        }
    }

    return (
        <div>

            <input className={error ? 'error' : ''}
                   value={title}
                   onChange={(e) => {
                       setTitle(e.currentTarget.value)
                       setError(false)
                   }}
                //клава
                   onKeyPress={(e) => {
                       if (e.key === 'Enter') {
                           addTask()
                       }

                   }
                   }
            />

            <Button
                title={'+'}
                changeFilter={addTask}
            />

            {error && <div className={'error-message'}>Title is required!</div>}
        </div>
    )
}