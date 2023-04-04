import { useState } from 'react';
import { TextButton } from '../../../../components/TextButton/TextButton';
import clsx from 'clsx';
import styles from './AddTodoForm.module.scss';

export const AddTodoForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className={styles.addTodoForm__header}>
        <p className={styles.addTodoForm__title}>Add a new todo</p>
        <button
          className={styles.addTodoForm__showFormButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          +
        </button>
      </header>
      <form
        className={clsx(styles.addTodoForm, {
          [styles.addTodoForm_shown]: isOpen,
        })}
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Submitted');
        }}
      >
        <fieldset className={styles.addTodoForm__fields}>
          <ul className={styles.addTodoForm__fieldsList}>
            <li className={styles.addTodoForm__fieldWrapper}>
              <label
                className={styles.addTodoForm__label}
                htmlFor='addTodoFrom__titleInput'
              >
                Todo title
              </label>
              <input
                className={styles.addTodoForm__textInput}
                type='text'
                name='title'
                id='addTodoForm__titleInput'
                placeholder='Enter a todo title'
                required={true}
                minLength={3}
                maxLength={30}
              />
            </li>
            <li className={styles.addTodoForm__fieldWrapper}>
              <label
                className={styles.addTodoForm__label}
                htmlFor='addTodoFrom__textInput'
              >
                Todo text
              </label>
              <input
                className={styles.addTodoForm__textInput}
                type='text'
                name='title'
                id='addTodoForm__textInput'
                placeholder='Enter a todo text'
                minLength={3}
                maxLength={50}
              />
            </li>
          </ul>
          <TextButton text={'Add todo'} type={'submit'} />
        </fieldset>
      </form>
    </>
  );
};
