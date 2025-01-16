import { useEffect, useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";
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


    let[list,setlist]=useState([])
    async function funDisplay(category_list){
        let response=await fetch('https://dummyjson.com/products/category/'+category_list);
        let result=await response.json();
        setlist(result.products)

    }

    useEffect(()=>{
        funDisplay();
    },[]);

    
    function funselect(event){
        var txt=event.currentTarget.value;
        console.log(txt);
        funDisplay(txt);
    }

    let imgStyle={"width":"200px","height":"200px"}

    let[RowData,setRowData]=useState();
    function rowClick(obj){
        setRowData(obj);
        console.log(RowData);

    }


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
                {
                    list.map((x)=>{
                        return<tr onClick={()=>{rowClick(x)}}>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.price}</td>
                            <td><img src={x.thumbnail} style={imgStyle}></img></td>
                        </tr>
                             

                    })
                }
            </div>
        </>
    );
}
export default Category;