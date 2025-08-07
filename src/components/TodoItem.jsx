import React from 'react'
import { useTodo } from '../Contexts/TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMessage, setTodoMessage] = useState(todo.todos)

    const {updateTodo,deleteTodo,toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo,id, {...todo, todos: todoMessage})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

  return (
    <div
    className={`flex items-center justify-between p-4 border-b border-gray-400 ${todo.completed ? 'bg-green-200' : 'bg-white'}`}
    >
        <input type="checkbox"
        className='cursor-pointer'
        checked = {todo.completed}
        onChange = {toggleCompleted}
        />
        <input type="text" 
        className={`border outline-none w-full bg-transparent rounded-lg${isTodoEditable ? 'border-black/10 px-2': 'border-transparent'}`}
        value={todoMessage}
        readOnly={!isTodoEditable}
        onChange = {(e) => setTodoMessage(e.target.value)} 
        />
        <button
        className='inline-flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded ml-2'
        onClick={()=> {
            if(todo.completed) return
            if(isTodoEditable) {
                editTodo()
            }else{
                setIsTodoEditable((prev) => !prev)
            }

        }}
        >
            {isTodoEditable ? "save" : "edit"}
        </button>
    </div>
  )
}

export default TodoItem