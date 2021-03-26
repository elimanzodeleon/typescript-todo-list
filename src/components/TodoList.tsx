import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { useTodoContext } from '../contexts/todoContext';
import { Todo } from '../interfaces';

const TodoList: React.FC = () => {
  const { todoState } = useTodoContext();
  const [addTodo, setAddTodo] = useState(false);

  return (
    <div className='container'>
      <h2>My todo list</h2>
      <div className='list-container'>
        <>
          {todoState.todos.map((todo: Todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </>
        {addTodo && <AddTodo setAddTodo={setAddTodo} />}
      </div>

      <button onClick={() => setAddTodo(!addTodo)}>
        {addTodo ? 'cancel' : 'add todo'}
      </button>
    </div>
  );
};

export default TodoList;
