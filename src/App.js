import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import Button from './components/Button';

const App = ()=>{
  return (
    <div class="todo-container">
      <Header title="This is a TodoApp"/>
      <ToDoItem text="Eat"/>
      <ToDoItem text="Code"/>
      <ToDoItem text="Sleep"/>
      <ToDoItem text="Repeat"/>
      <Button/>
    </div>
  )
}

export default App;