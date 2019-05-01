import React from 'react';
import {Toggle, Delete, UpdateInput, UpdateTodo} from './actionCreator';

export const Todo = ({todo, i}) => (
  //could remake this component to be more abstract or I could just make the parameters more generic to also fit the keyword component
  <li>
    <input type="checkbox" onChange={Toggle(i)} value={todo.completed} />
    {todo.updating ? (
      <input value={todo.text} onChange={UpdateTodo(i)} />
    ) : (
      <span className={todo.completed ? 'strikeThrough' : ''}>{todo.text}</span>
    )}

    <button onClick={Delete(i)}>Delete</button>
    <button onClick={UpdateInput(i)}>
      {todo.updating ? 'Done' : 'Update'}
    </button>
  </li>
);
