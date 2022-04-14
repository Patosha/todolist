import React from 'react';
import {TaskType} from "./TodoList";
import {EditableSpan} from "./components/EditableSpan";

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (todolistID: string, id: string) => void
    changeStatus: (todolistID: string, id: string, isDone: boolean) => void
    id: string
    updateTask: (todolistId: string, tasksId: string, newTitle: string) => void
}

const TasksList = (props: TaskListPropsType) => {
    // Деструктуризация
    // const {tasks, names} = props
    // const tasks = props.tasks
    // const names = props.names

    const updateTaskHandler = (taskId: string, newTitle: string) => {
        props.updateTask(props.id, taskId, newTitle)
    }

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

                            <EditableSpan
                                title={t.title}
                                callBack={(newTitle: string) => updateTaskHandler(t.id, newTitle)}
                            />

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