


// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8000/api/',
// });

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('accessToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, error => Promise.reject(error));

// export default api;




import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add JWT access token from localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: handle global response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optionally handle token expiration, redirect to login, etc.
    if (error.response && error.response.status === 403) {
      console.warn('Access Denied. Possibly invalid or expired token.');
    }
    return Promise.reject(error);
  }
);

export default api;
