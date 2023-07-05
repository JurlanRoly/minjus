import axios from 'axios';

axios.defaults.withCredentials = false;
// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Authorization'] = 'Bearer ';
