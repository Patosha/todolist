import React from 'react';
import {FilterValuesType} from "./App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";
import {AddItemForm} from "./components/AddItemForm";

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

    const onAllClickHandler = () => {
        props.changeFilter(props.todolistId, 'all')
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.todolistId, 'active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.todolistId, 'completed')
    }

    const addTaskHandler = (title: string) => {
        props.addTask(title, props.todolistId)
    }

    return (
        <div>

            <TodoListHeader
                title={props.title}
                removeTodolist={props.removeTodolist}
                todolistID={props.todolistId}
            />

            <AddItemForm
                callBack={addTaskHandler}
            />

            <TasksList
                tasks={props.tasks}
                removeTask={props.removeTasks}
                changeStatus={props.changeStatus}
                todolistID={props.todolistId}
            />

            <div>
                <Button
                    btnClass={props.filter === 'all' ? 'btnActive' : ''}
                    changeFilter={onAllClickHandler}
                    title={"All"}
                />
                <Button
                    btnClass={props.filter === 'active' ? 'btnActive' : ''}
                    changeFilter={onActiveClickHandler}
                    title={"Active"}
                />
                <Button
                    btnClass={props.filter === 'completed' ? 'btnActive' : ''}
                    changeFilter={onCompletedClickHandler}
                    title={"Completed"}
                />
            </div>
        </div>
    );
};

export default TodoList;