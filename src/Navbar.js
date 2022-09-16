// styles
import "./Navbar.css";
import "./components/Search.js"
import Search from "./components/Search.js";

export default function Navbar() {
  const handleOnSearchChange = (searchData)=>{
    console.log(searchData)
  }
  return (
    <div className="navbar">
    <nav>
    <a href=" " className="brand">
    <h1>Todo List App</h1>
    </a>
    <Search onSearchChange={handleOnSearchChange}/>
    <a href=" ">Weather Info</a>
    </nav>
    </div>
  );
}
