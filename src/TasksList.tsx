import React from 'react';
import {TaskType} from "./App";

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void
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
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => {
                            props.removeTask(t.id)
                        }}>
                            x
                        </button>
                    </li>
                })
            }
        </ul>
    );
};

export default TasksList;