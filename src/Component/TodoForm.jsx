import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext';

function TodoForm() {

    const { addTodo } = useTodo();
    const [todo, setTodo] = useState("");

    const add = (e) => {
        e.preventDefault();

        if (!todo) return
        //id we dont need to pass because id is alredy there with dflaut vlaue
        addTodo({ todo: todo, completed: false });
        setTodo("");
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

