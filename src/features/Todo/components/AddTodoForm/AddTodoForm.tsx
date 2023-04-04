import { TextButton } from '../../../../components/TextButton/TextButton';
import styles from './AddTodoForm.module.scss';

export const AddTodoForm = () => {
  return (
    <form
      className={styles.addTodoForm}
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Submitted');
      }}
    >
      <fieldset className={styles.addTodoForm__fields}>
        <legend className={styles.addTodoForm__legend}>Add a new todo</legend>
        <ul className={styles.addTodoForm__fieldsList}>
          <li className={styles.addTodoForm__fieldWrapper}>
            <label
              className={styles.addTodoForm__label}
              htmlFor='addTodoFrom__titleInput'
            >
              Todo title
            </label>
            <input
              className={styles.addTodoForm__input}
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
              className={styles.addTodoForm__input}
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
  );
};
