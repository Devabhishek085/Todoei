import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import Button from './components/Button';
import CounterComponent from './components/CounterComponent';

const App = ()=>{
  return (
    <div class="todo-container">
      <CounterComponent/>
      <Header title="This is a TodoApp"/>
      <ToDoItem text="Protien"/>
      <ToDoItem text="Eat"/>
      <ToDoItem text="Code"/>
      <ToDoItem text="Sleep"/>
      <ToDoItem text="Repeat"/>
      <ToDoItem text="Gym"/>

      <Button/>
    </div>
  )
}

export default App;