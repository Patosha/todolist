import React from 'react';
import {TaskType} from "./TodoList";

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (todolistID: string, id: string) => void
    changeStatus: (todolistID: string, id: string, isDone: boolean) => void
    todolistID: string
}

const TasksList = (props: TaskListPropsType) => {
    // Деструктуризация
    // const {tasks, names} = props
    // const tasks = props.tasks
    // const names = props.names

    return (
        <ul>
            {
                props.tasks.map((t) => {
                    return (
                        <li key={t.id} className={t.isDone ? 'isDone' : ''}>
                            <input type="checkbox" checked={t.isDone}
                                   onChange={(e) =>
                                       props.changeStatus(props.todolistID, t.id, e.currentTarget.checked)}
                            />

                            <span>{t.title}</span>

                            <button onClick={() => {
                                props.removeTask(props.todolistID, t.id)
                            }}>
                                X
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default TasksList;