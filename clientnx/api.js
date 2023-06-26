import axios from "axios"

const api =axios.create({
    //baseURL:"http://localhost:8080"
    baseURL:'https://api.homecarejourney.online'
})
export default api