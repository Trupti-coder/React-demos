import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
    let[email,setEmail]=useState();
    let[password,setPassword]=useState();

    return(
        <>
        <form>
            <h3>Login</h3>
            <div>
                Email:<input type="email" required />
            </div>
            <div>
                Password:<input type="password" required/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        <div>
            <p>If you do not have account<Link >signup here</Link> </p> 
        </div>
        </>
    );
}
export default Login;