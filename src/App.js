import {useState} from 'react';
import './App.css';
import './Navbar'
import Navbar from './Navbar';

function App() {
  const [todos, setTodos] = useState(['learn react','learn material ui'])
  const [input, setInput] = useState('')

  const addTodo = (event)=>{
    event.preventDefault();
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="container">
    <Navbar/>

    <form className='new-todo'>
      <input value={input} onChange={event =>(setInput(event.target.value))}/>
      <button disabled={!input} type='submit' onClick={addTodo}>Add Todo</button>
    </form>

      <div className='list-item'>
      <ul>
        {todos.map((todo)=> (
          <li>
            <div className="list-item__description">
              <h2>{todo}</h2>
            </div>
          </li>
        ))}
      </ul>
      </div>
   
    </div>
  );
}

export default App;
