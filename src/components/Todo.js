import React from 'react';

const Todo = ({todo, toggleComplete}) => {

    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    return (
        <div style={{display: 'flex'}}>
            <input type='checkbox' onClick={handleCheckboxClick}/>
            <li>{todo.task}</li>
            <button>X</button>


        </div>
    );
};

export {Todo};