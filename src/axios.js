import axios from "axios";

const instance = axios.create({
    baseURL: 'https://amulink.tk'
});

export default instance;