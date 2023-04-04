import clsx from 'clsx';
import { TodoContainer } from './features/Todo/components/TodoContainer/TodoContainer';

function App() {
  return (
    <div className="App">
      <h1 className={clsx('main-title', '_visually-hidden')}>Todo App</h1>
      <TodoContainer></TodoContainer>
    </div>
  )
}

export default App
