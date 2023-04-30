
import './App.css';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolists';

function App() {
  return (
    <div className="App">
      <h1>Todo Application </h1>
      <Addtodo />
      <Todolist />
    </div>
  );
}

export default App;
