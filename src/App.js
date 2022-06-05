import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos] = useState([]);
  const [textInput,setTextInput] = useState('');
  const [status,setStatus] = useState('all');
  const [filteredTodos,setFilteredTodos] = useState([]);
  useEffect(()=>{filteredHandler()},[todos,status])
  const filteredHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed == true));
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed==false));
      break;
      default:
        setFilteredTodos(todos);
      break;
    }
  }
  return (
    <div>
      <header>
      <h1>Todo List</h1>
    </header>
      <Form 
      todos={todos} 
      textInput={textInput} 
      setTodos={setTodos}
      setTextInput={setTextInput}
      status={status}
      setStatus={setStatus}
      />
      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filterTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
