import React, {useState} from 'react';
import {FilterValuesType, TaskType} from "./App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterValuesType) => void
}

const TodoList = (props: TodoListPropsType) => {

    const [title, setTitle] = useState<string>('')
    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }

    //const onKeyPressAddTask

    return (
        <div>
            <TodoListHeader title={props.title}/>

            <div>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
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
            </div>

            <TasksList
                tasks={props.tasks}
                removeTask={props.removeTasks}
            />

            <div>
                <Button
                    changeFilter={() => props.changeFilter('all')}
                    title={"All"}
                />
                <Button
                    changeFilter={() => props.changeFilter('active')}
                    title={"Active"}
                />
                <Button
                    changeFilter={() => props.changeFilter('completed')}
                    title={"Completed"}
                />
            </div>
        </div>
    );
};

export default TodoList;