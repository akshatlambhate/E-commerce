import  axios  from "axios";
let token = localStorage.getItem("token")
export const axiosInstance = axios.create({
    baseURL: 'https://dp-backend-e-comm.herokuapp.com/api',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
     }
});
export default axiosInstance