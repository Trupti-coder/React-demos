import { useEffect, useState } from "react";

function ShowList(){

    let[list,setList]=useState([]);
    async function getAllList(){
        let response=await fetch('https://dummyjson.com/recipes');
        let result=await response.json();
        console.log(result.recipes);
        setList(result.recipes);
    }

    useEffect(()=>{
        getAllList();
    },[]);

    return(
        <>
        <table border='2'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Ingredients</th>
                <th>Instructions</th>
                <th>prepTimeMinutes</th>
                <th>Image</th>
            </tr>
        </table>
        </>
    );
}
export default ShowList;