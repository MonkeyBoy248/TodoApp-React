import { Todo } from '../../../../types';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};
