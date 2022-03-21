import axios from 'axios';
const instance = axios.create({ baseURL: 'https://cipsmn-api.herokuapp.com/public' });

export default instance