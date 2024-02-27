import axios from 'axios';

const APP_URL = 'http://127.0.0.1:8000/api/';

export const api = axios.create({
    baseURL: APP_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
