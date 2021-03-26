import React, { useState } from 'react';
import { Todo } from '../interfaces';
import { useTodoContext } from '../contexts/todoContext';

interface Props {
  setAddTodo: (value: boolean) => void;
}

const AddTodo: React.FC<Props> = ({ setAddTodo }) => {
  const { todoDispatch } = useTodoContext();
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddTodo(false);
    const date = new Date();
    const id = date.toString();
    const newTodo: Todo = { id, title: todo, completed: false };
    todoDispatch({
      type: 'ADD_TODO',
      todo: newTodo,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='list-item'>
        <input
          className='todo-input'
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='e.g. buy tsla'
          autoFocus
        />
        <button type='submit' disabled={todo.length === 0}>
          +
        </button>
      </form>
    </>
  );
};

export default AddTodo;
