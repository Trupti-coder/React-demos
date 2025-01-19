import { useState } from "react";

function ShowList(){

    let[list,setList]=useState([]);
    async function getAllList(){
        let response=await fetch('https://dummyjson.com/recipes');
        let result=await response.json();
        console.log(result.recipes);
        setList(result.recipes);
    }

    return(
        <>
        </>
    );
}
export default ShowList;