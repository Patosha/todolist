import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid"; // генерация случайного числа

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type tasksObjectType = {
    [key: string]: Array<TaskType>
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<tasksObjectType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    const changeFilter = (todolistId: string, filter: FilterValuesType) => {
        setTodolists(todolists.map((el) => el.id === todolistId ? {...el, filter: filter} : el))
    }

    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter((el) => el.id !== todolistID))
        delete tasks[todolistID]
    }

    const removeTask = (todolistID: string, taskId: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter((el) => el.id !== taskId)})
    }

    const addTask = (todolistID: string, title: string) => {

        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }

        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }

    const changeStatus = (todolistID: string, taskId: string, newIsDoneValue: boolean) => {
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].map(el => el.id === taskId ? {...el, isDone: newIsDoneValue} : el)
        })

    }

//UI:
    return (
        <div className="App">

            {todolists.map((el) => {

                let tasksForTodoList = tasks[el.id];

                switch (el.filter) {
                    case 'active':
                        tasksForTodoList = tasks[el.id].filter(t => !t.isDone)
                        break
                    case 'completed':
                        tasksForTodoList = tasks[el.id].filter(t => t.isDone)
                        break
                    default:
                        tasksForTodoList = tasks[el.id]
                }

                return (
                    <TodoList
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        filter={el.filter}
                        tasks={tasksForTodoList}
                        removeTasks={removeTask}
                        addTask={addTask}
                        changeFilter={changeFilter}
                        changeStatus={changeStatus}
                        removeTodolist={removeTodolist}
                    />
                )
            })}
        </div>
    );
}

export default App;
