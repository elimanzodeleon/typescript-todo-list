import React from 'react';
import TodoProvider from '../contexts/todoContext';
import TodoList from './TodoList';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;
