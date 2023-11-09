import { useContext, createContext } from 'react'


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Mgs",
            completd: false,
        }
    ],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
    toggleComplete: () => { }
})

export const TodoContesxtProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}
