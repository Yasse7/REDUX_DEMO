import {  useSelector } from 'react-redux';

const useTodo=()=>{
    const Todo = useSelector((state)=>state.Todo);
    const todo =[]; 

    return Todo;
}

export default useTodo;

