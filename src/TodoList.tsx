import React, {useState} from 'react';
import {FilterValuesType} from "./App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";

export type  TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodoListPropsType = {
    todolistId: string
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTasks: (todolistID: string, id: string) => void
    addTask: (todolistID: string, title: string) => void
    changeFilter: (todolistId: string, filter: FilterValuesType) => void
    changeStatus: (todolistID: string, id: string, isDone: boolean) => void
    removeTodolist: (todolistID: string) => void
}

const TodoList = (props: TodoListPropsType) => {

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
            <TodoListHeader
                title={props.title}
                removeTodolist={props.removeTodolist}
                todolistID={props.todolistId}
            />

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

                {/*<button title={'+'} onClick={addTask}/>*/}

                <Button title={'+'} changeFilter={addTask}/>
                {error && <div className={'error-message'}>Title is required!</div>}
            </div>

            <TasksList
                tasks={props.tasks}
                removeTask={props.removeTasks}
                changeStatus={props.changeStatus}
                todolistID={props.todolistId}
            />

            <div>
                <Button
                    btnClass={props.filter === 'all' ? 'btnActive' : ''}
                    changeFilter={() => props.changeFilter(props.todolistId, 'all')}
                    title={"All"}
                />
                <Button
                    btnClass={props.filter === 'active' ? 'btnActive' : ''}
                    changeFilter={() => props.changeFilter(props.todolistId, 'active')}
                    title={"Active"}
                />
                <Button
                    btnClass={props.filter === 'completed' ? 'btnActive' : ''}
                    changeFilter={() => props.changeFilter(props.todolistId, 'completed')}
                    title={"Completed"}
                />
            </div>
        </div>
    );
};

export default TodoList;