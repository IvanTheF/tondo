import React from "react";
import Check from "./Check";
import cn from 'classnames';
import { IoMdRemoveCircleOutline } from "react-icons/io";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
    <div className="flex items-center justify-between bg-sky-300 mb-5 rounded-2xl p-5 w-full">
      <button className="flex items-center"
      onClick={() => changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted}/>
        <span className={cn({
            'line-through text-gray-700' : todo.isCompleted,
        })}
        >
           {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <IoMdRemoveCircleOutline size={20}
        className='text-gray-600 hover:text-rose-600
        transition-colors ease-in-out duration-200'
        />
       </button>
    </div>
    )
}

export default TodoItem
