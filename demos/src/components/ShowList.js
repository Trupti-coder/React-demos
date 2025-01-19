import { useEffect, useState } from "react";

function ShowList(){

    function funClick(){
        
    }











    // for get all product info

    let[list,setList]=useState([]);
    async function getAllList(lm,sk){
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
        <h3>Recipes List</h3>
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

                   return(<tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.ingredients}</td>
                        <td>{x.intructions}</td>
                        <td>{x.prepTimeMinutes}</td>
                        <td><img src={x.image} style={imgStyle}></img></td>

                    </tr>
                   )
                })
            }
        </table>
        <h3>Pagination</h3>
        <ul onClick={funClick} type='none'>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
        </ul>
        </>
    );
}
export default ShowList;