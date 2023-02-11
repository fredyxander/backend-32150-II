import axios from "axios";
import got from "got";

const baseURL = "https://jsonplaceholder.typicode.com";

//peticion con axios
const getDataAxios = async()=>{
    try {
        const response = await axios.get(`${baseURL}/users`);
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

//peticion con axios
const getDataGot = async()=>{
    try {
        const response = await got.get(`${baseURL}/users`);
        const data = JSON.parse(response.body);
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

// getDataAxios();
getDataGot();