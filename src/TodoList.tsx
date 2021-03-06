import React from 'react';
import {FilterValuesType} from "./App";
import TodoListHeader from "./TodoListHeader";
import {AddButton} from "./AddButton";
import TasksList from "./TasksList";
import {AddItemForm} from "./components/AddItemForm";

export type  TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodoListPropsType = {
    // todolistId: string
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTasks: (todolistID: string, id: string) => void
    addTask: (todolistID: string, title: string) => void
    changeFilter: (todolistId: string, filter: FilterValuesType) => void
    changeStatus: (todolistID: string, id: string, isDone: boolean) => void
    removeTodolist: (todolistID: string) => void
    updateTask: (todolistId: string, tasksId: string, newTitle: string) => void
    id: string
    updateTodolistTitle: (todolistId: string, newTitle: string) => void
}

const TodoList = (props: TodoListPropsType) => {

    const onAllClickHandler = () => {
        props.changeFilter(props.id, 'all')
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.id, 'active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.id, 'completed')
    }

    const addTaskHandler = (title: string) => {
        props.addTask(props.id, title)
    }

    return (
        <div>

            <TodoListHeader
                title={props.title}
                removeTodolist={props.removeTodolist}
                id={props.id}
                updateTodolistTitle={props.updateTodolistTitle}
            />

            <AddItemForm
                addTaskHandler={addTaskHandler}
            />

            <TasksList
                tasks={props.tasks}
                removeTask={props.removeTasks}
                changeStatus={props.changeStatus}
                updateTask={props.updateTask}
                id={props.id}
            />

            <div>
                <AddButton
                    btnClass={props.filter === 'all' ? 'btnActive' : ''}
                    changeFilter={onAllClickHandler}
                    title={"All"}
                />
                <AddButton
                    btnClass={props.filter === 'active' ? 'btnActive' : ''}
                    changeFilter={onActiveClickHandler}
                    title={"Active"}
                />
                <AddButton
                    btnClass={props.filter === 'completed' ? 'btnActive' : ''}
                    changeFilter={onCompletedClickHandler}
                    title={"Completed"}
                />
            </div>
        </div>
    );
};

export default TodoList;