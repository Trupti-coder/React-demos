import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');
    let[error,setError]=useState();
    
    function emailChange(event){
        setEmail(event.target.value);
    }

    function passwordChange(event){
        setPassword(event.target.value);
    }

    function funSubmit(event){
        event.preventDefault();

        let storedUseres=JSON.parse(localStorage.getItem("users"));
        let isValiduser=false;

        if(storedUseres){
            for(let i=0;i<storedUseres.length;i++){
                if(storedUseres[i].userEmail===email && storedUseres[i].userPassword===password){
                    isValiduser=true;
                    break;
                }
            }
        }

        if(isValiduser){
            alert("login successful");
        }
        else{
            setError("Invalid userEmail and userPassword");
        }

    }

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