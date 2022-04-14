import React from 'react';

type TodoListHeaderPropsType = {
    title: string
    removeTodolist: (todolistID: string) => void
    id: string
}

const TodoListHeader = (props: TodoListHeaderPropsType) => {

    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }

    return (
        <h3>
            {props.title}

            <button onClick={removeTodolistHandler}>
                X
            </button>
        </h3>
    );
};

export default TodoListHeader;

