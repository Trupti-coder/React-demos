function ControledForm(){

    let[name,setName]=useState('');
    let[dob,setDob]=useState('');
    let[gender,setGender]=useState('');
    let[subject,setSubject]=useState([]);
    let[city,setCity]=useState("");

    function funSubmit(event){
        event.preventDefault();
        console.log(name,dob,gender,subject,city);
        let obj={userName:name,userDob:dob,userGender:gender,userSubject:subject,userCity:city}
        console.log(obj);

    }

    return(
        <>
        <form onSubmit={funSubmit}>

        <div>
                Name:<input type="text"
                 onChange={(event)=>setName(event.target.value)} 
                 />
            </div>
        
            <div>
                DOB:<input type="date"
                 onChange={(event)=>setDob(event.target.value)}
                  />
            </div>
            <div>
                Gender:<input type="radio"
                 name="gender" value="male" 
                 onChange={(event)=>setGender(event.target.value)}
                 />Male

                <input type="radio"
                 name="gender"
                  value="female"
                   onChange={(event)=>setGender(event.target.value)}
                    />Female
            </div>
            <div>
                City:<select onChange={(event)=>setCity(event.target.value)}>
                    <option></option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                </select>
            </div>
            <div>
                Subject:<input type="checkbox"
                 value="Physics" 
                 onChange={(e) => {
                    const value = e.target.value;
                    // Directly using setSubjects without unused expressions
                    setSubject(prevSubjects => 
                      e.target.checked 
                        ? [...prevSubjects, value]  // Add if checked
                        : prevSubjects.filter(subject => subject !== value)  // Remove if unchecked
                    );
                  }} 
              
                 />Physics<br />
                <input type="checkbox" 
                value="Chemistry"
                onChange={(e) => {
                    const value = e.target.value;
                    // Directly using setSubjects without unused expressions
                    setSubject(prevSubjects => 
                      e.target.checked 
                        ? [...prevSubjects, value]  //add if checked
                        : prevSubjects.filter(subject => subject !== value)  // Remove if unchecked
                    );
                  }} 
              
                
                />Chemistry <br />
                <input type="checkbox"
                 value="Mathematics"
                 onChange={(e) => {
                    const value = e.target.value;
                    // Directly using setSubjects without unused expressions
                    setSubject(prevSubjects => 
                      e.target.checked 
                        ? [...prevSubjects, value]  // Add if checked
                        : prevSubjects.filter(subject => subject !== value)  // Remove if unchecked
                    );
                  }} 
              
                 />Mathematics
            </div>
            <button type="submit">Submit</button>

        </form>
        </>
    );
}
export default ControledForm;