export interface TodoState {
  todos: Todo[];
}

export interface Todo {
  readonly id: string;
  readonly title: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: Todo;
}
