import { Modal } from 'bootstrap';
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
                    
                </Modal.body>
            </Modal.Dialog>
        </Modal>
        </>
    );
}
export default MyModel;