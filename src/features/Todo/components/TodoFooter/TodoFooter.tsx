import { TextButton } from '../../../../components/TextButton/TextButton';
import { useTodoStore } from '../../../../store/todosStore';
import { Statistics } from '../../../../types';
import { Filter } from '../TodoContainer/TodoContainer';
import styles from './TodoFooter.module.scss';
import { useMemo } from 'react';

interface Controls {
  text: string;
  term: Filter;
}

export const TodoFooter = () => {
  const setTerm = useTodoStore((state) => state.setTerm);
  const todos = useTodoStore((state) => state.todos);
  const controls: Controls[] = [
    {
      text: 'All',
      term: 'SHOW_ALL',
    },
    {
      text: 'Done',
      term: 'SHOW_DONE',
    },
    {
      text: 'Active',
      term: 'SHOW_ACTIVE',
    },
  ];
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

  const getStatisticsText = (counter: number, type: keyof Statistics) => {
    const isSingle = counter === 1;

    return `${counter} ${isSingle ? 'task' : 'tasks'} ${
      isSingle ? 'is' : 'are'
    } ${type}`;
  };

  return (
    <footer className={styles.todoFooter}>
      <div className={styles.todoFooter__statictics}>
        <p className={styles.todoFooter__counter}>
          {getStatisticsText(statistics.active, 'active')}
        </p>
        <p className={styles.todoFooter__counter}>
          {getStatisticsText(statistics.done, 'done')}
        </p>
      </div>
      <div className={styles.todoFooter__controls}>
        {controls.map((button) => {
          return (
            <TextButton
              text={button.text}
              type={'button'}
              key={button.text}
              onClick={() => setTerm(button.term)}
            />
          );
        })}
      </div>
    </footer>
  );
};
