import { useState } from "react";

function ToDoList(){
    let[task,setTask]=useState("");

    let[tasks,setTasks]=useState([]);

    function funTask(event){
        setTask(event.target.value);
          
      }

      function funAdd(){
        if(task.trim() !==""){
          setTasks([...tasks,task]);
          setTask("");
          console.log(tasks);
        }
    
    
      }

    return(
        <>
        <h3>ToDoList Application</h3>
    <input type="text"  value={task}  onChange={funTask}/>

    <button onClick={funAdd}>Add</button>
        </>
    );
}
export default ToDoList;