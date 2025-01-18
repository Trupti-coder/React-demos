function Counter(){
    return(
        <>
         <h3>Count:{count}</h3>
         <h3>Counter Example</h3>
         <button onClick={funIncrement}>Increment</button>
         <button onClick={funDecrement}>Decrement</button>
        </>
    );
}
export default Counter;