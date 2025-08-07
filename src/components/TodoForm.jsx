import React from 'react'
import { useTodo } from '../Contexts/TodoContext'

function TodoForm() {


    const [todos,setTodos] =useState("")
    const {addTodo} =useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return
        addTodo({todos, completed: false})
    }
  return (
    <form onSubmit={add} className='flex'>
        <input type="text"
        placeholder='Add a new todo'
        className='border border-gray-300 rounded p-2 flex-grow *:focus:outline-none focus:border-blue-500'
        value={todo}
        onChange={(e) => setTodos(e.target.value)}
        />
        <button type='submit' className='bg-green-600 text-white px-4 py-2 rounded ml-2'>
            Add Todo 
        </button>
    </form>
  )
}

export default TodoForm