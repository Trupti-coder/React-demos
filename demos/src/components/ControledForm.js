function ControledForm(){

    let[name,setName]=useState('');
    let[dob,setDob]=useState('');
    let[gender,setGender]=useState('');
    let[subject,setSubject]=useState([]);
    let[city,setCity]=useState("");
    
    return(
        <>
        <form onSubmit={funSubmit}>

        </form>
        </>
    );
}
export default ControledForm;