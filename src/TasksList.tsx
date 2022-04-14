import React from 'react';
import {TaskType} from "./TodoList";

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (todolistID: string, id: string) => void
    changeStatus: (todolistID: string, id: string, isDone: boolean) => void
    id: string
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
                                       props.changeStatus(props.id, t.id, e.currentTarget.checked)}
                            />

                            <span>{t.title}</span>

                            <button onClick={() => {
                                props.removeTask(props.id, t.id)
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