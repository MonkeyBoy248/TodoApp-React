import { TextButton } from '../../../../components/TextButton/TextButton';
import { Statistics, Todo } from '../../../../types';
import { Filter } from '../TodoContainer/TodoContainer';
import styles from './TodoFooter.module.scss';

interface TodoFooterProps {
  statistics: Statistics;
  onClick: (term: Filter) => void;
}

interface Controls {
  text: string;
  term: Filter;
}

export const TodoFooter = ({ statistics, onClick }: TodoFooterProps) => {
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
              onClick={() => onClick(button.term)}
            />
          );
        })}
      </div>
    </footer>
  );
};
