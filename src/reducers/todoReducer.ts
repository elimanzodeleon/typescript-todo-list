import { TodoState, Todo } from '../interfaces';

interface AddTodo {
  readonly type: 'ADD_TODO';
  readonly todo?: Todo;
}

interface RemoveTodo {
  readonly type: 'REMOVE_TODO';
  readonly id?: string;
}

interface ToggleTodo {
  readonly type: 'TOGGLE_TODO';
  readonly id?: string;
}

type Actions = AddTodo | RemoveTodo | ToggleTodo;

export const todoReducer = (state: TodoState, action: Actions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo!],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id!),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id!) {
            return todo;
          }
          return { ...todo, completed: !todo.completed };
        }),
      };
    default:
      throw new Error('NOT HANDLING TYPE IN REDUCER');
  }
};
