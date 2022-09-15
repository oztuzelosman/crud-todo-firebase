import {useState, useEffect} from 'react';
import './App.css';
import './Navbar'
import Navbar from './Navbar';
import {v4 as uuidv4} from "uuid";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TbEditCircle} from 'react-icons/tb'
import {CgCheckO} from 'react-icons/cg'

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);
  const [input, setInput] = useState('');
  const [editTodo, setEditTodo] = useState(null);

 useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
 const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if(editTodo) {
        setInput(editTodo.title);
    } else {
        setInput("")
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  const handleComplete = (todo) => {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        })
      );
    };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({id})=>{ 
    console.log('clicked')
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  return (
    <div className="container">
    <Navbar/>

    <form className='new-todo'>
      <input value={input} placeholder='Enter new todo' onChange={event =>(setInput(event.target.value))}/>
      <button disabled={!input} type='submit' onClick={onFormSubmit}>
        {editTodo ? "Update" : "Add Todo"}
      </button>
    </form>

      <div className='list-item'>
      <ul>
        {todos.map((todo)=> (
          <li key={todo.id}>
            <div>
              <input 
                type='text'
                value={todo.title} 
                className={`list ${todo.completed ? "complete" : ""}`}                
                onChange={(event)=> event.preventDefault()}/>
            </div>

            <div className='list-item__buttons'>
            <button onClick={()=> handleDelete(todo)}>              
              <RiCloseCircleLine className='list-item__buttons__cl'/>
            </button>
            <button onClick={()=>handleEdit(todo)}>              
              <TbEditCircle className='list-item__buttons__ed'/>
            </button>
            <button onClick={()=> handleComplete(todo)}>              
              <CgCheckO className='list-item__buttons__ch'/>
            </button>
            </div>

          </li>
        ))}
      </ul>
      </div>
   
    </div>
  );
}

export default App;
