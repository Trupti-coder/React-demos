import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Category(){


let[category,setCategory]=useState([]);
   

    async function getCategory(){
        let response = await fetch('https://dummyjson.com/products/category-list');
        let show = await response.json();
        setCategory(show);
    }
    useEffect(()=>{
        getCategory();
    },[]);
    return(
        <>
        </>
    );
}
export default Category;