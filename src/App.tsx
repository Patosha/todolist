import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid"; // генерация случайного числа

export type  TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
//BLL:
    const todoListTitle_1: string = "What to learn"

    const [tasks, setTasks] =
        useState([
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "React", isDone: false},
            ]
        )

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    let tasksForTodoList;
    switch (filter) {
        case 'active':
            tasksForTodoList = tasks.filter(t => !t.isDone)
            break
        case 'completed':
            tasksForTodoList = tasks.filter(t => t.isDone)
            break
        default:
            tasksForTodoList = tasks
    }

    const removeTask = (id: string) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }

        setTasks([newTask, ...tasks])
    }

    const changeStatus = (id: string, newIsDoneValue: boolean) => {
        setTasks(tasks.map(t => t.id === id ? {...t, isDone: newIsDoneValue} : t))
    }

//UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                filter={filter}
                tasks={tasksForTodoList}
                removeTasks={removeTask}
                addTask={addTask}
                changeFilter={changeFilter}
                changeStatus={changeStatus}
            />
        </div>
    );
}

export default App;
