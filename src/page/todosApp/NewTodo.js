import React from 'react';
import { useState } from 'react';

const NewTodo = () => {
    const [todo, setTodo] = useState('');

    const handleInput = e =>{
        setTodo(e.target.value)
    }

    const handleTodo = (e) => {
        e.preventDefault();
        console.log(todo)
        e.target.reset()
    }
    
    return (
        <div>
            <form onSubmit={handleTodo}>
                <label htmlFor="newTodo">New Todo: </label>
                <input type="text" name='todo' onChange={handleInput}/>
                <button>Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;