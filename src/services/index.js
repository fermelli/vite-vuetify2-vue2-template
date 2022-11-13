import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authentication: `Bearer ${token}`,
    },
})

export default service
