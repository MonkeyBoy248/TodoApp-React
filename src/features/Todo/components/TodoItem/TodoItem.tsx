import { FormEventHandler, useRef } from 'react';
import { TextButton } from '../../../../components/TextButton/TextButton';
import { Todo, TodoTextInfo } from '../../../../types';
import styles from './TodoItem.module.scss';
import clsx from 'clsx';

interface TodoItemProps {
  todo: Todo;
  onEdit: (id: string, key: keyof TodoTextInfo, value: string) => void;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
}

export const TodoItem = ({ todo, onEdit, onDelete, onCheck }: TodoItemProps) => {
  const titleInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <li className={styles.todoItem}>
      <div className={styles.todoItem__leftColumn}>
        <input
          className={styles.todoItem__doneCheckbox}
          type='checkbox'
          name='done'
          id='todoItem__done'
          checked={todo.done}
          onChange={() => onCheck(todo.id)}
        />
        <div className={styles.todoItem__info}>
          <input
            ref={titleInputRef}
            className={clsx(styles.todoItem__input, styles.todoItem__input_title)}
            type='text'
            name='todoItem__title'
            id='addTodoForm__titleInput'
            value={todo.title}
            minLength={3}
            maxLength={30}
            onChange={(e) => onEdit(todo.id, 'title', e.target.value)}
          />
          <input
            className={clsx(styles.todoItem__input, styles.todoItem__input_text)}
            type='text'
            name='todoItem__text'
            id='addTodoForm__textInput'
            value={todo.text}
            minLength={3}
            maxLength={50}
            onChange={(e) => onEdit(todo.id, 'text', e.target.value)}
          />
        </div>
      </div>
      <div className={styles.todoItem__controls}>
        <TextButton
          text={'Delete'}
          onClick={() => onDelete(todo.id)}
          backgroundColor={'var(--delete-button)'}
        />
        <TextButton
          text={'Edit'}
          onClick={() => { titleInputRef.current?.focus() }}
          backgroundColor={'var(--edit-button)'}
        />
      </div>
    </li>
  );
};
