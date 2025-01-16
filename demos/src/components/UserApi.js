import { useEffect, useState } from "react";
function UserApi(){
    const [users, setUsers] = useState([]);
    const [genderFilter, setGenderFilter] = useState(""); // State for gender filter
    const [bloodGroupFilter, setBloodGroupFilter] = useState(""); // State for blood group filter


    // Fetch user data
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    }
    fetchUsers();
  }, []);


    return(
        <>
        </>
    );
}
export default UserApi;