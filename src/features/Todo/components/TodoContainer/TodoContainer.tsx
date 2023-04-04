import styles from './TodoContainer.module.scss';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { TodoList } from '../TodoList/TodoList';

export const TodoContainer = () => {
  return (
    <main className={styles.todo__container}>
      <div className={styles.todo__mainContent}>
        <header className={styles.todo__header}>
          <h2 className={styles.todo__title}>Todos</h2>
            <AddTodoForm></AddTodoForm>
        </header>
        <TodoList />
      </div>
    </main>
  )
}
