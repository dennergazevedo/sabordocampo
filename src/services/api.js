import axios from 'axios';

const api = axios.create({
    baseURL:'https://vps-3922624.artcopias.com.br:4257',
});

export default api;