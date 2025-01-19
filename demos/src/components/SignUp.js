import { useState } from "react";

function SignUp(){
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");

    function nameChange(){

    }

    function emailChange(){

    }

    function passwordChange(){
        
    }

   
    return(
        <>
        <form>
            <div>
                Name:<input type="text" onChange={nameChange} />
            </div>
            <div>
                Email:<input type="email" onChange={emailChange}  required />
            </div>
            <div>
                Password:<input type="password" onChange={passwordChange} required />
            </div>
        </form>
        </>
    );
}
export default SignUp;