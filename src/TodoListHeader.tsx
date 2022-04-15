import React from 'react';
import {EditableSpan} from "./components/EditableSpan";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type TodoListHeaderPropsType = {
    title: string
    id: string
    removeTodolist: (todolistID: string) => void
    updateTodolistTitle: (todolistId: string, newTitle: string) => void
}


const TodoListHeader = (props: TodoListHeaderPropsType) => {

    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }

    const editableSpanForH3Handler = (newTitle: string) => {
        props.updateTodolistTitle(props.id, newTitle)
    }

    return (
        <h3>
            <EditableSpan
                title={props.title}
                callBack={editableSpanForH3Handler}
            />

            <IconButton onClick={removeTodolistHandler} aria-label="delete" color="default">
                <DeleteIcon />
            </IconButton>
        </h3>
    );
};

export default TodoListHeader;

