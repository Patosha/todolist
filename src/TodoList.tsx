import React, {useState} from 'react';
import {FilterValuesType, TaskType} from "./App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterValuesType) => void
    changeStatus: (id: string, isDone: boolean) => void
}

const TodoList = (props: TodoListPropsType) => {

    const [title, setTitle] = useState<string>('')

    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
            setTitle('')
        } else {
            setError(true)
        }
    }

    return (
        <div>
            <TodoListHeader title={props.title}/>

            <div>

                <input className={error ? 'error' : ''}
                       value={title}
                       onChange={(e) => {
                           setTitle(e.currentTarget.value)
                           setError(false)
                       }}
                    //клавиатура
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
            />

            <div>
                <Button
                    btnClass={props.filter === 'all' ? 'btnActive' : ''}
                    changeFilter={() => props.changeFilter('all')}
                    title={"All"}
                />
                <Button
                    btnClass={props.filter === 'active' ? 'btnActive' : ''}
                    changeFilter={() => props.changeFilter('active')}
                    title={"Active"}
                />
                <Button
                    btnClass={props.filter === 'completed' ? 'btnActive' : ''}
                    changeFilter={() => props.changeFilter('completed')}
                    title={"Completed"}
                />
            </div>
        </div>
    );
};

export default TodoList;