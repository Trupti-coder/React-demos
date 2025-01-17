import { useState } from "react";

function AddProduct(props){
    
        let [txtName,setTxtName]=useState();
        let [txtPrice,setTxtPrice]=useState();

        function nameChange(event){
            setTxtName(event.currentTarget.value);
           // console.log(txtName);
        }
        function priceChange(event){
            setTxtPrice(event.currentTarget.value);
           // console.log(txtPrice);
    
        }

        function funAdd(){
            console.log(txtName,txtPrice);
            var obj={prodName:txtName,prodPrice:txtPrice};
            props.getNewObj(obj); //create a new object and send it to the app componenet via props.getNewObj
            console.log(obj);
    
    
        }


    return(
        <>
        <h3>Add product Form </h3>
        <div>
            ProductName:<input type="text" onChange={nameChange}/>
        </div>
        <div>
            ProductPrice:<input type="text" onChange={priceChange}/>
        </div>
        <div>
            <input type="button" value="AddProduct" onClick={funAdd}/>
        </div>

        </>
    );
}
export default AddProduct;