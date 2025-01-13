import axios from "axios";


const instance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = 'Bearer ' + 'token';
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)


instance.interceptors.response.use(
    response => {
        // 错误码校验
        return response.data;
    },
    error => {
        if (error.response && error.response.status === 401) {
            // Handle token expired, logout, and redirect to login page
        }
        return Promise.reject(error.response);
    }
)



export default instance;