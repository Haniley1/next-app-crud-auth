import axios from 'axios'

const api = axios.create({
  baseURL: 'https://reqres.in/api',
})

const clientApi = axios.create({
  baseURL: '/',
})

export default api
export { clientApi }
