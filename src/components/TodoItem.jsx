import React from 'react'
import { useTodo } from '../Contexts/TodoContext'
import { useState } from 'react'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMessage, setTodoMessage] = useState(todo.todos)

    const {updateTodo,deleteTodo,toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todos: todoMessage})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

  return (
    <div
    className={`flex items-center justify-between p-3 border rounded-lg shadow-sm transition ${todo.completed ? 'bg-green-100' : 'bg-white'} hover:shadow-md`}
    >
        <input
    type="checkbox"
    className='cursor-pointer accent-green-600'
    checked={todo.completed}
    onChange={toggleCompleted}
  />
        <input
    type="text"
    className={`border outline-none w-full mx-2 bg-transparent rounded-lg ${isTodoEditable ? 'border-green-400 px-2' : 'border-transparent'}`}
    value={todoMessage}
    readOnly={!isTodoEditable}
    onChange={(e) => setTodoMessage(e.target.value)}
  />
        <button
    className='inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded ml-2 transition'
    onClick={() => {
      if (todo.completed) return
      if (isTodoEditable) {
        editTodo()
      } else {
        setIsTodoEditable((prev) => !prev)
      }
    }}
    disabled={todo.completed}
  >
    {isTodoEditable ? "Save" : "Edit"}
  </button>
        <button
    className='inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded ml-2 transition'
    onClick={() => deleteTodo(todo.id)}
  >
    Delete
  </button>
    </div>
  )
}

export default TodoItem