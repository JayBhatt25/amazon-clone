import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/my--clone-29364/us-central1/api'
});

export default instance;