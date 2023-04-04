import styles from './TodoContainer.module.scss';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { TodoList } from '../TodoList/TodoList';
import { TodoFooter } from '../TodoFooter/TodoFooter';

export const TodoContainer = () => {
  const todos = [
    {
      id: 'kglt',
      title: 'Contest',
      done: false,
      text: 'Finish context',
    },
    {
      id: 'klko',
      title: 'State manger',
      done: false,
      text: 'Create state manager',
    },
    {
      id: 'jkhu',
      title: 'Todo app',
      done: false,
      text: 'Finish the project',
    },
  ];
  
  return (
    <main className={styles.todo__container}>
      <div className={styles.todo__mainContent}>
        <header className={styles.todo__header}>
          <h2 className={styles.todo__title}>Todos</h2>
          <AddTodoForm></AddTodoForm>
        </header>
        <TodoList todos={todos} />
        <TodoFooter />
      </div>
    </main>
  );
};
