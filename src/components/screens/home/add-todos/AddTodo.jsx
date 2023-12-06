import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
   

const AddTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [
            {
            id: new Date(),
            title,
            isCompleted: false
            },
            ...prev,])
            setTitle('')
        }

    return (
        <div className="flex items-center justify-between bg-sky-200 mb-4 py-3 rounded-2xl p-5 mt-9 w-full">
          <input 
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            className='bg-transparent w-full border-none outline-none'
            placeholder="Добавить задачу..."/>
            <button onClick={() => addTodo(title)} className="text-gray-600 hover:text-green-600 duration-200 rounded-md p-2 w-7 h-9">
       <IoMdAdd size={22}/>
     </button>
        </div>
    )
}

export default AddTodoField
