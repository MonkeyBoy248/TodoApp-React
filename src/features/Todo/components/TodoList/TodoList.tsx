import { Todo, TodoTextInfo } from '../../../../types';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface TodoListProps {
  todos: Todo[];
  onEdit: (id: string, key: keyof TodoTextInfo, value: string) => void;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
}

export const TodoList = ({
  todos,
  onCheck,
  onDelete,
  onEdit,
}: TodoListProps) => {
  return (
    <ul className={styles.todoList}>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              onEdit={onEdit}
              onCheck={onCheck}
              onDelete={onDelete}
            />
          );
        })
      ) : (
        <p>The list is empty!</p>
      )}
    </ul>
  );
};
