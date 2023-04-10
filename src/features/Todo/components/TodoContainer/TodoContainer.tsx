import styles from './TodoContainer.module.scss';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { TodoList } from '../TodoList/TodoList';
import { TodoFooter } from '../TodoFooter/TodoFooter';
import { useMemo } from 'react';
import { TextButton } from '../../../../components/TextButton/TextButton';
import { TodoStore, useTodoStore } from '../../../../store/todosStore';

export type Filter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_DONE';

const {
  todos,
  toggleStatus,
  editTodo,
  removeAllDone,
  removeTodo,
  markAllDone,
  filterTerm
} = useTodoStore<TodoStore>();
export const TodoContainer = () => {
  const visibleTodos = useMemo(() => {
    switch (filterTerm) {
      case 'SHOW_ACTIVE':
        return todos.filter((todo) => !todo.done);
      case 'SHOW_DONE':
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  }, [filterTerm, todos]);
  const doneTodosAmount = useMemo(() => {
    return todos.reduce((acc, currentValue) => {
      if (currentValue.done) {
        return acc + 1;
      }

      return acc;
    }, 0);
  }, [todos]);

  return (
    <main className={styles.todo__container}>
      <div className={styles.todo__mainContent}>
        <header className={styles.todo__header}>
          <h2 className={styles.todo__title}>Todos</h2>
          <AddTodoForm></AddTodoForm>
          <div className={styles.todo__controls}>
            {todos.length > 0 && doneTodosAmount !== todos.length && (
              <TextButton
                text={'Mark all done'}
                backgroundColor={'var(--mark-all-button)'}
                onClick={markAllDone}
              />
            )}
            {doneTodosAmount > 0 && (
              <TextButton
                text={`Remove all done (${doneTodosAmount})`}
                backgroundColor={'var(--delete-button)'}
                onClick={removeAllDone}
              />
            )}
          </div>
        </header>
        <TodoList
          todos={visibleTodos}
          onCheck={toggleStatus}
          onDelete={removeTodo}
          onEdit={editTodo}
        />
        <TodoFooter />
      </div>
    </main>
  );
};
