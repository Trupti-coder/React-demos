import { useEffect, useState } from "react";

function ShowList(){

    function funClick(event){

        event.preventDefault();
        var x=parseInt(event.target.textContent);
        console.log(x);
        let lm=0;
        let sk=0;
        if(x===1){
            lm=10;
            sk=0;
            getAllList(lm,sk);
            
        }
        else if(x===2){
            lm=10;
            sk=10;
            getAllList(lm,sk);
        }
        else if(x===3){
            lm=10;
            sk=20;
            getAllList(lm,sk);
        }
        else{
            lm=10;
            sk=0;
            getAllList(lm,sk);
        }
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
        getAllList(10,0);
    },[]);

    let imgStyle={"width":"100px" ,"Height":"100px"}

    //for rowClick
    let[rowflag,setRowFlag]=useState(false);
    let[rowdata,setRowData]=useState();

    function rowClick(obj){
        console.log(obj);
        setRowFlag(true);
        setRowData(obj);
    }

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

                   return(<tr key={x.id} onClick={()=>{rowClick(x)}}>
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