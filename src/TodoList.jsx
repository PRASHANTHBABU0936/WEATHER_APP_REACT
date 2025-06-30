import { useState } from "react";
export default function TodoList(){
    
    let [todos,setTodos]=useState(["Sample task"]);
    let[newTodo,setNewTodo]=useState("");

    let addNewTask = () =>{
        // console.log("we HAve to add new task in todo");
    setTodos([...todos,newTodo])
    }
    let updateTodoValue=(event)=>{
// console.log(event.target.value);
setNewTodo(event.target.value);
    }
    return(
        <div> 
            <input placeholder="add a task" value={newTodo}onChange={updateTodoValue}></input>
                      <br></br>
          <button onClick={addNewTask}>Add Task</button>
          <br></br>
          <br></br>
          <hr></hr>
            <h4>ToDo List</h4> 
            <ul> 
             {   todos.map((todo)=>(
<li>{todo}</li>
                ))}
            </ul>
            </div>
    );
}