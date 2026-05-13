import axios from 'axios'
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000' })
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token')
  if (token) config.headers.Authorization = 'Bearer ' + token
  return config
})
export const getInternships = () => API.get('/api/internships/')
export const submitApplication = (data) => API.post('/api/applications/', data)
export const getApplications = () => API.get('/api/applications/')
export const deleteApplication = (id) => API.delete('/api/applications/'+id)
export const adminLogin = (data) => API.post('/api/admin/login', data)
