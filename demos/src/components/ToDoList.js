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


      function funRemove(index){
        const newTasks=[...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
      }

    return(
        <>
        <h3>ToDoList Application</h3>
    <input type="text"  value={task}  onChange={funTask}/>

    <button onClick={funAdd}>Add</button>

    <ul>
      {
        tasks.map((task,index)=>{
          return(
          <li key={index}>
            <span>{task}</span>
            <button onClick={()=>{funRemove(index)}} style={{paddingLeft:"2px"}}>Remove</button>
          </li>

        )})
      }
    </ul>
        </>
    );
}
export default ToDoList;