import axios from 'axios';

const api = axios.create({
    baseURL:'http://162.241.102.200:4257',
});

export default api;