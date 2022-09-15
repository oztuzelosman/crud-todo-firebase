import {useState} from 'react';
import './App.css';
import './Navbar'
import Navbar from './Navbar';
import {v4 as uuidv4} from "uuid";


function App() {
  const [todos, setTodos] = useState([{id: uuidv4(), title: 'Learn react', completed:false}])
  const [input, setInput] = useState('')

  const addTodo = (event)=>{
    event.preventDefault();
    setTodos([...todos, {id: uuidv4(), title: input, completed:false}])
    setInput('')
  }

  return (
    <div className="container">
    <Navbar/>

    <form className='new-todo'>
      <input value={input} placeholder='Enter new todo' onChange={event =>(setInput(event.target.value))}/>
      <button disabled={!input} type='submit' onClick={addTodo}>Add Todo</button>
    </form>

      <div className='list-item'>
      <ul>
        {todos.map((todo)=> (
          <li key={todo.id}>
            <div>
          <input type='text' value={todo.title} className='list' onChange={(event)=> event.preventDefault()}/>

            </div>
          </li>
        ))}
      </ul>
      </div>
   
    </div>
  );
}

export default App;
