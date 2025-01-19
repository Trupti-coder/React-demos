import { useState } from "react";

function SignUp(){
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");

    function nameChange(event){
        setName(event.target.value);
        console.log(name);

    }

    function emailChange(event){
        setEmail(event.target.value);

    }

    function passwordChange(event){
        setPassword(event.target.value);

    }

    function funSubmit(event){
        event.preventDefault();

        let newUser={userName:name,userEmail:email,userPassword:password}
        console.log(newUser);

        let existingUser;
        if(localStorage.getItem("users")){
            existingUser=JSON.parse(localStorage.getItem("users"));
        }
        else{
            existingUser=[];
        }

        if(!Array.isArray(existingUser)){
            existingUser=[];
        }

        existingUser.push(newUser);

        localStorage.setItem('users',JSON.stringify(existingUser))
        alert("data successfully saved to localstorage");


        setName("");
        setEmail("");
        setPassword("");
        

    }

   
    return(
        <>
        <form onClick={funSubmit}>
            <div>
                Name:<input type="text" onChange={nameChange} />
            </div>
            <div>
                Email:<input type="email" onChange={emailChange}  required />
            </div>
            <div>
                Password:<input type="password" onChange={passwordChange} required />
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
        </>
    );
}
export default SignUp;