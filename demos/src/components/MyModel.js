import { Button, Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function MyModel(props){

    let[modelopen,setModelOpen]=useState(false);

    let[txtId,setId]=useState();
    let[txtName,setName]=useState();
    let[txtIngredients,setIngredients]=useState();
    let[txtInstruction,setInstruction]=useState();
    let[txtprepTimeMinutes,setprepTimeMinutes]=useState();

    return(
        <>
        <Modal>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Display Recipes

                    </Modal.Title>
                </Modal.Header>
                <Modal.body>
                    <div>
                        Id:<input type='text' defaultValue={txtId} onChange={idChange} ></input>
                    </div>
                    <div>
                        Name:<input type='text'defaultValue={txtName}></input>
                    </div>
                    <div>
                        Ingredients:<input type='text' defaultValue={txtIngredients}></input>
                    </div>
                    <div>
                        Instructions:<input type='text' defaultValue={txtInstruction} ></input>
                    </div>
                    <div>
                        prepTimeMinutes:<input type='text' defaultValue={txtprepTimeMinutes}></input>
                    </div>
                </Modal.body>
                <Modal.Footer>
                    <Button varient='secondary' onClick={funClose}>Close</Button>
                    <Button varient="primary" onClick={funUpdate}>Update</Button>
                    <Button varient="secondary" onClick={funDelete}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
        </>
    );
}
export default MyModel;