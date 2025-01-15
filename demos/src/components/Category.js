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
        <h3>Category</h3>
            Select Category : <select onClick={funselect}>
                <option>select</option>
                {
                    category.map((x)=>{
                        return <option>{x}</option>
                    })
                }
            </select>
            <div>
                <Table className="table table-info table-hover table-bordered">
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Img</th>
                </Table>
                
            </div>
        </>
    );
}
export default Category;