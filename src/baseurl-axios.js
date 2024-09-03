import axios from 'axios'

const API_URL = axios.create({
  baseURL: 'http://localhost:5050',
  timeout: 1000
})
export default API_URL
