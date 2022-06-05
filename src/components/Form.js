import React, { useState } from 'react'
import TodoList from './TodoList';

const Form = ({todos,setTodos,textInput,setTextInput,status,setStatus}) => {
  const textHandler = (e) =>{
    setTextInput(e.target.value);
  }
  const statusHandler = (e) =>{
    setStatus(e.target.value);
  }
  const submitHandler = (e) =>{

    e.preventDefault();
    // console.log(textInput)
    const todo = { text:textInput, completed : false, id : Math.random() * 100};
    // console.log(todo.text);
    setTodos([
      todo,...todos
    ])

    // console.log(todos.text)
    setTextInput("");
  }
  return (
    <>
    <form>
        <input type="text" value={textInput}  onChange={textHandler} className="todo-input"  />
        <button className="todo-button" onClick={submitHandler} type="submit">
          <i className="fas fa-plus-square" />
        </button>
        <div className="select">
          <select name="todos" value={status} onChange={statusHandler} className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default Form