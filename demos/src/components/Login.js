import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');
    let[error,setError]=useState();
    

    return(
        <>
        <form onSubmit={funSubmit}>
            <h3>Login</h3>
            <div>
                Email:<input type="email" onChange={emailChange} required />
            </div>
            <div>
                Password:<input type="password" onChange={passwordChange} required/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        <div>
            <p>If you do not have account<Link to='/signup' >signup here</Link> </p> 
        </div>
        </>
    );
}
export default Login;