import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:1342',
});

export default api;