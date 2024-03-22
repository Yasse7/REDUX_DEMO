import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import useTodo from './useTodo';

function App() {
  const [todo , setTodo] = useState();
  const dispatch = useDispatch();

 
  const {todos} =useTodo();

  const handleSubmit =(e)=>{
    //for not reloading the pagge when adding te todo 
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler =(t)=>{
    dispatch(RemoveTodoAction(t))
  };


  return (
    <div className="App">
      <header className="App-header">
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter Todo' style={
          {
            width: 350,
            padding :10 , 
            borderRadius : 20,
            border : "none", 
            fontSize : 20,
          }
        }  onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit' style={
          {
            padding :10 , 
            borderRadius : 25,
            fontSize : "none", 
            marginLeft : 20,
          }
        }>Go</button>
      </form>
      <form>
        <ul className='allTodos'>
          { todos && todos.map((t)=>(
               <li key={t.id} className='SingleTodo'>
               <span>{t.todo}</span>
               <button
               style={{
                 borderRadius: 25,
                 padding : 10 ,
                 border : "1px solid white" , 
                 color : "white",
                 backgroundColor : "orangered"
               }}
               onClick={()=>removeHandler(t)}
               >Delete</button>
             </li>
          ))}
        </ul>
      </form>
      </header>
    </div>
  );
}

export default App;
