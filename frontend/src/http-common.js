import axios from "axios"

// Initialize Axios for React CRUD HTTP Client
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "content-type": "application/json"
    }
});