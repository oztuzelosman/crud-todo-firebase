import {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['learn react','learn material ui'])
  const [input, setInput] = useState('')

  const addTodo = (event)=>{
    event.preventDefault();
    console.log('Im working')
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="container">
    <h1> Hello World</h1>

    <form>
      <input value={input} onChange={event =>(setInput(event.target.value))}/>
      <button onClick={addTodo}>Add Todo</button>
    </form>

    <ul className='todo-card'>
      {todos.map((todo)=> (<li>{todo}</li>))}
    </ul>
    
    </div>
  );
}

export default App;
