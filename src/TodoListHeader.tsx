import React from 'react';
import {EditableSpan} from "./components/EditableSpan";

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

            <button onClick={removeTodolistHandler}>
                X
            </button>
        </h3>
    );
};

export default TodoListHeader;

