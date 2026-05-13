import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import Button from './components/Button';

const App = ()=>{
  return (
    <div class="todo-container">
      <Header/>
      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>
      <Button/>
    </div>
  )
}

export default App;