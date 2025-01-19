import { useEffect, useState } from "react";

function ShowList(){

    // for get all product info

    let[list,setList]=useState([]);
    async function getAllList(){
        let response=await fetch('https://dummyjson.com/recipes?limit='+lm+'&skip='+sk);
        let result=await response.json();
        console.log(result.recipes);
        setList(result.recipes);
    }

    useEffect(()=>{
        getAllList();
    },[]);

    let imgStyle={"width":"100px" ,"Height":"100px"}

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
            {
                list.map((x)=>{
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.ingredients}</td>
                        <td>{x.intructions}</td>
                        <td>{x.prepTimeMinutes}</td>
                        <td><img src={x.image} style={imgStyle}></img></td>

                    </tr>
                })
            }
        </table>
        </>
    );
}
export default ShowList;