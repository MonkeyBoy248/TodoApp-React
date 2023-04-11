import { append, updateItem, removeItem, create } from 'zuxs-store'
import { Todo } from '../types';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../utils/helpers/localStorage';

export interface TodoStore {
  todos: Todo[];
  filterTerm: Filter;
  setTerm: (term: Filter) => void;
  addTodo: (item: Todo) => void;
  editTodo: (id: string, key: keyof Todo, newValue: string) => void;
  removeTodo: (id: string) => void;
  toggleStatus: (id: string) => void;
  removeAllDone: () => void;
  markAllDone: () => void;
}

export type Filter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_DONE';

const todosKey = 'todos';

const getTodosFromLocalStorage = (): Todo[] => {
  const todos = getItemFromLocalStorage<Todo[]>(todosKey);

  return todos ?? [];
}

const setTodosToLocalStorage = (todos: Todo[]): void => {
  return setItemToLocalStorage(todosKey, todos);
}

export const useTodoStore = create<TodoStore>((set, get) => {
  return {
    filterTerm: 'SHOW_ALL',
    todos: getTodosFromLocalStorage(),
    addTodo: (item) => {
      set({ todos: append([item]) });
      setTodosToLocalStorage(get().todos);
    },
    removeTodo: (id) => {
      set({ todos: removeItem((item) => item.id === id) });
      setTodosToLocalStorage(get().todos);
    },
    editTodo: (id, key, value) => {
      const todos = get().todos;
      const index = todos.findIndex((todo) => todo.id === id);

      if (index === -1) {
        return;
      }

      const todo = todos[index];
      const newTodo = { ...todo, [key]: value };

      set({ todos: updateItem(index, newTodo) });
      setTodosToLocalStorage(get().todos);
    },
    removeAllDone: () => {
      const todos = get().todos;
      const filteredTodos = todos.filter((todo) => !todo.done);

      set({ todos: filteredTodos });
      setTodosToLocalStorage(get().todos);
    },
    markAllDone: () => {
      const todos = get().todos;
      const allDoneTodos = todos.map((todo) => {
        return { ...todo, done: true };
      });

      set({ todos: allDoneTodos });
      setTodosToLocalStorage(get().todos);
    },
    toggleStatus: (id) => {
      const todos = get().todos;
      const index = todos.findIndex((todo) => todo.id === id);

      if (index === -1) {
        return;
      }

      const todo = todos[index];
      const newTodo: Todo = { ...todo, done: !todo.done };

      set({ todos: updateItem(index, newTodo) });
      setTodosToLocalStorage(get().todos);
    },
    setTerm: (filterTerm) => {
      set({ filterTerm });
    },
  };
});