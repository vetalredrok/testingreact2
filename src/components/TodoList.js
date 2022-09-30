import React from 'react';

import {Todo} from "./Todo";

const TodoList = ({todos, toggleComplete}) => {
    return (
        <ul>
            {
                todos.map(value => <Todo key={value.id} todo={value} toggleComplete={toggleComplete}/>)
            }
        </ul>
    );
};

export {TodoList};