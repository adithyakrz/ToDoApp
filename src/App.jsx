import { useState } from 'react'
import './App.css'
import { TodoProvider } from './Contexts/TodoContext';
function App() {
  const [todos, setTodos] =useState([])

  const addTodo = (todo) => {
    // Ensure the todo has an id and is added to the beginning of the list
    // Using Date.now() to generate a unique id
    setTodos((prev) > [{id: Date.now, ...todo} , ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => {
      prevTodo.id === todo.id ? todo : prevTodo
    }))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    //spread operator is used to create a new object with the updated completed status while keeping the other properties unchanged.
      )
    )
    }

  return (
    <TodoProvider value = {{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1>Test</h1>
    </TodoProvider>
  )
}

export default App
