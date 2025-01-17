function AddProduct(){
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
    </div>
        </>
    );
}
export default AddProduct;