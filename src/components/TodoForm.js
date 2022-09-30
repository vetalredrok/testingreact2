import React, {useState} from 'react';
import {v4} from "uuid";


const TodoForm = ({addTodo}) => {

    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    const createTask = async (e) => {
        await setTodo({...todo, task: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (todo.task.trim()){
            await addTodo({...todo, id: v4()});
            //reset todo
            await setTodo({...todo, task: ''});
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input name='task' type='text' value={todo.task} onChange={createTask}
            />

            <button type='submit'> TEST </button>
        </form>
    );
};

export {TodoForm};