import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Todo message",
        completed: false
    }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    
    return useContext(TodoContext);}
    //use of this custom hook is that it allows us to access the TodoContext without needing to import useContext every time.


export const TodoProvider = TodoContext.Provider;