import styles from './TodoContainer.module.scss';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { TodoList } from '../TodoList/TodoList';
import { TodoFooter } from '../TodoFooter/TodoFooter';
import { useMemo, useState } from 'react';
import { Statistics, Todo, TodoTextInfo } from '../../../../types';
import { TextButton } from '../../../../components/TextButton/TextButton';

export type Filter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_DONE';

export const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([
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
  ]);
  const [filterTerm, setFilterTerm] = useState<Filter>('SHOW_ALL');
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
  const statistics = useMemo(() => {
    return todos.reduce(
      (previousValue: Statistics, currentValue) => {
        currentValue.done ? previousValue.done++ : previousValue.active++;

        return previousValue;
      },
      {
        done: 0,
        active: 0,
      }
    );
  }, [todos]);

  const getFilterTerm = (term: Filter) => {
    setFilterTerm(term);
  };

  const deleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, key: keyof TodoTextInfo, value: string) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            [key]: value,
          };
        }

        return todo;
      });
    });
  };

  const toggleTodoStatus = (id: string) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    });
  };

  const removeAllDoneTodos = () => {
    setTodos((todos) => todos.filter((todo) => !todo.done));
  };

  const markAllTodosDone = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return { ...todo, done: true };
      })
    );
  };

  const addNewTodo = (textInfo: TodoTextInfo) => {
    const newTodo: Todo = {
      ...textInfo,
      id: crypto.randomUUID(),
      done: false,
    };

    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <main className={styles.todo__container}>
      <div className={styles.todo__mainContent}>
        <header className={styles.todo__header}>
          <h2 className={styles.todo__title}>Todos</h2>
          <AddTodoForm onSubmit={addNewTodo}></AddTodoForm>
          <div className={styles.todo__controls}>
            <TextButton
              text={'Mark all done'}
              backgroundColor={'var(--mark-all-button)'}
              onClick={markAllTodosDone}
            />
            {doneTodosAmount > 0 && (
              <TextButton
                text={`Remove all done (${doneTodosAmount})`}
                backgroundColor={'var(--delete-button)'}
                onClick={removeAllDoneTodos}
              />
            )}
          </div>
        </header>
        <TodoList
          todos={visibleTodos}
          onCheck={toggleTodoStatus}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        <TodoFooter statistics={statistics} onClick={getFilterTerm} />
      </div>
    </main>
  );
};
