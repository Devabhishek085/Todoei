import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ToDoItem from './components/todoitem';

const App = ()=>{
  return (
    <div>
      <Header/>
      <ToDoItem/>
    </div>
  )
}

export default App;