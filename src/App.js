import './App.css';
import { AddTodo } from './component/addTodo';
import Todo from './component/todo';

function App ()
{
  return (
    <div className="App">
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
