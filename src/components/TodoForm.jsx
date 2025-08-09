import React from 'react'
import { useTodo } from '../Contexts/TodoContext'
import { useState } from 'react'

function TodoForm() {


    const [todos,setTodos] =useState("")
    const {addTodo} =useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todos) return
        addTodo({todos, completed: false})
        setTodos("") // Clear the input after adding
    }
  return (
    <form onSubmit={add} className='flex mb-4'>
      <input
        type="text"
        placeholder='Add a new todo'
        className='border border-gray-300 rounded p-2 flex-grow focus:outline-none focus:border-green-500'
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
      />
      <button
        type='submit'
        className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded ml-2 transition'
      >
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm