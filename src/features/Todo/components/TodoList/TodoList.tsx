import { Todo } from '../../../../types';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className={styles.todoList}>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })
      ) : (
        <p>The list is empty!</p>
      )}
    </ul>
  );
};
