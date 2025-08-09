import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Contexts/TodoContext';
import TodoForm from './components/TodoForm';
import { TodoItem } from './components';

function App() {
  const [todos, setTodos] =useState([])

  const addTodo = (todo) => {
    // Ensure the todo has an id and is added to the beginning of the list
    // Using Date.now() to generate a unique id
    setTodos((prev) => [{id: Date.now(), ...todo} , ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? todo : prevTodo
    ))
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

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem('todos'))
      if(todos && todos.length > 0) {
        setTodos(todos)
      }
      // This effect runs once when the component mounts to load todos from localStorage
    },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    // This effect runs whenever the todos state changes to save them to localStorage
  }, [todos])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-green-700">Todo List</h1>
          <TodoForm />
          <div className="mt-4 space-y-2">
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </TodoProvider>
    </div>
  )
}

export default App
