import React from 'react';

import './TodosListItem.css';


export default ({ todo, handleClick }) => (
    <li className={todo.completed ? 'completed' : ''}
        onClick={(e) => handleClick(todo.id)}>
        {todo.description}
    </li>
);

