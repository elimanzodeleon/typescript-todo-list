import React, { useContext, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';
import { TodoState } from '../interfaces';

export const initialState: TodoState = {
  todos: [],
};

interface TodoContextType {
  todoState: TodoState;
  todoDispatch: React.Dispatch<any>;
}

const initialContextValues = {
  todoState: initialState,
  todoDispatch: () => {},
};

const TodoContext = React.createContext<TodoContextType>(initialContextValues);

interface Props {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
