import { TextButton } from '../../../../components/TextButton/TextButton';
import { Todo } from '../../../../types';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className={styles.todoItem}>
      <div className={styles.todoItem__leftColumn}>
        <input
          className={styles.todoItem__doneChecbox}
          type='checkbox'
          name='done'
          id='todoItem__done'
        />
        <div className={styles.todoItem__info}>
          <p className={styles.todoItem__title}>{todo.title}</p>
          <p className={styles.todoItem__text}>{todo.text}</p>
        </div>
      </div>
      <div className={styles.todoItem__controls}>
        <TextButton
          text={'Delete'}
          onClick={(e) => console.log(e)}
          backgroundColor={'var(--delete-button)'}
        />
        <TextButton
          text={'Edit'}
          onClick={(e) => console.log(e)}
          backgroundColor={'var(--edit-button)'}
        />
      </div>
    </li>
  );
};
