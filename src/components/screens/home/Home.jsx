import React, { useState } from "react";
import TodoItem from "./items/TodoItem";
import AddTodoField from "./add-todos/AddTodo";

const TodoList = [
    {
        id: 'todo1',
        title: 'Простой и удобный способ планировать свой день',
        isCompleted: false,
    },
    {
        id: 'todo2',
        title: 'Добавляйте и удаляйте задачи в один клик',
        isCompleted: false,
    },
    {
        id: 'todo3',
        title: 'Закончить свой первый pet-project на React',
        isCompleted: true,
    },
]

const Home = () => {

    const [todos, setTodos] = useState(TodoList)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t.id !== id)) 

    return <div className=" w-4/5 mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-right text-gray-700">Ton To-Do</h1>
        {todos.map(todo => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            changeTodo ={changeTodo}
            removeTodo={removeTodo}
            />
        ))}
        <AddTodoField setTodos={setTodos} />
    </div>
}

export default Home
