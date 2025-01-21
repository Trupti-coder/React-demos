import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Modal, } from 'react-bootstrap';
function MyModel(props){

    let[modelOpen,setModelOpen]=useState(false);

    let[txtId,setId]=useState();
    let[txtName,setName]=useState();
    let[txtIngredients,setIngredients]=useState();
    let[txtInstruction,setInstruction]=useState();
    let[txtprepTimeMinutes,setprepTimeMinutes]=useState();

    function btnClose(){
    setModelOpen(false);
    }

function idChange(event){
    var x=event.currentTarget.value;
    console.log(x);
    setId(x);
}

function timeChange(event){
    var x=event.currentTarget.value;
    console.log(x);
    setprepTimeMinutes(x);
}

   async  function funUpdate(){
    var response=await fetch('https://dummyjson.com/recipes/'+txtId, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prepTimeMinutes:txtprepTimeMinutes
              
            })
          });
          var result=await response.json();
          console.log(result);
          btnClose();

    

    }

    async function funDelete(){
        var response=await fetch('https://dummyjson.com/products/'+txtId,{
            method: 'DELETE'
        })
        var result=await response.json();
        console.log(result);
        btnClose();


    }

    useEffect(()=>{
        setModelOpen(true);
        setId(props.rowData.id);
        setName(props.rowData.name);
        setIngredients(props.rowData.ingredients);
        setInstruction(props.rowData.instructions);
        setprepTimeMinutes(props.rowData.prepTimeMinutes);
    })

    
    return(<>
    <Modal show={modelOpen} onHide={btnClose}>
       <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Display Recipes</Modal.Title>

        </Modal.Header>
        <Modal.Body>
            <div>
                Id:<input type='text' defaultValue={txtId} onChange={idChange} ></input>
            </div>
            <div>
                Name:<input type='text' defaultValue={txtName}></input>
            </div>
            <div>
            Ingredients:<input type='text' defaultValue={txtIngredients}></input>
            </div>
            <div>
                Instructions:<input type='text' defaultValue={txtInstruction}></input>
            </div>
            <div>
                prepTimeMinutes:<input type='text' defaultValue={txtprepTimeMinutes} onClick={timeChange}></input>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={btnClose}>Close</Button>
            <Button variant='primary' onClick={funUpdate}>Update</Button>
            <Button variant='secondary' onClick={funDelete}>Delete</Button>
        </Modal.Footer>
       </Modal.Dialog>
    </Modal>

    </>);
}
export default MyModel;