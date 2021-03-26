import React from 'react';
import { useTodoContext } from '../contexts/todoContext';
import { TodoItemProps } from '../interfaces';

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { todoDispatch } = useTodoContext();

  return (
    <div className='list-item'>
      <h3 className={todo.completed ? 'todo todo-complete' : 'todo'}>
        {todo.title}
      </h3>
      <div>
        <input
          type='checkbox'
          onChange={() => todoDispatch({ type: 'TOGGLE_TODO', id: todo.id })}
          checked={todo.completed}
        />{' '}
        <button
          onClick={() => todoDispatch({ type: 'REMOVE_TODO', id: todo.id })}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
