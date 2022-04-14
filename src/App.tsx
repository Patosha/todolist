import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm"; // генерация случайного числа

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

    const addTask = (todolistId: string, title: string) => {
        let newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }

    const addTodoList = (newTitle: string) => {
        const newTodoListId = v1()
        const newTodoList: TodolistsType = {id: newTodoListId, title: newTitle, filter: 'all'}
        setTodolists([newTodoList, ...todolists])
        setTasks({...tasks, [newTodoListId]: []})
    }

    const updateTask = (todolistId: string, tasksId: string, newTitle: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(el => el.id === tasksId ? {...el, title: newTitle} : el)
        })
    }

    const updateTodolistTitle = (todolistId: string, newTitle: string) => {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, title: newTitle} : el))
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

            <AddItemForm
                addTaskHandler={addTodoList}
            />

            {todolists.map((el) => {

                let tasksForTodoList: Array<TaskType>;

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
                        // todolistId={el.id}
                        title={el.title}
                        filter={el.filter}
                        tasks={tasksForTodoList}
                        removeTasks={removeTask}
                        addTask={addTask}
                        changeFilter={changeFilter}
                        changeStatus={changeStatus}
                        removeTodolist={removeTodolist}
                        updateTask={updateTask}
                        id={el.id}
                        updateTodolistTitle={updateTodolistTitle}
                    />
                )
            })}
        </div>
    );
}

export default App;
