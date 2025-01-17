function ToDoList(){
    return(
        <>
        <h3>ToDoList Application</h3>
    <input type="text"  value={task}  onChange={funTask}/>

    <button onClick={funAdd}>Add</button>
        </>
    );
}
export default ToDoList;