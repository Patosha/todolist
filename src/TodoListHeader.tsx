import React from 'react';

type TodoListHeaderPropsType = {
    title: string
    removeTodolist: (todolistID: string) => void
    todolistID: string
}

const TodoListHeader = (props: TodoListHeaderPropsType) => {

    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistID)
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

