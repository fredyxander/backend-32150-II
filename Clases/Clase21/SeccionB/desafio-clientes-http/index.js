import axios from "axios";

const baseURL="http://localhost:8080";

const testGetUsers = async()=>{
    try {
        const response = await axios.get(`${baseURL}/users`);
        // const data = await response.json();
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

testGetUsers();