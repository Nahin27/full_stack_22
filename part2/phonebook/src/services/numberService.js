import axios from "axios";
const baseUrl = "http://localhost:3001/persons"

const renderList = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)  
}

const postNum = (numObj) => {
    const request = axios.post(baseUrl, numObj)
    return request.then(response => response.data)
}

export default { renderList, postNum }