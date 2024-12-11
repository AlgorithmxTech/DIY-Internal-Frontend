import axios, { AxiosInstance } from 'axios';

// Create Axios instance
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NODE_ENV === 'production'
    ? import.meta.env.VITE_API_BASE_URL_PROD
    : import.meta.env.VITE_API_BASE_URL_DEV,
});

// Set Authorization header and localStorage tokens
export const setAuthToken = (token: string, refreshToken: string): void => {
  if (token && refreshToken) {
    console.log('Setting Authorization Header:', `Bearer ${token}`);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  } else {
    console.log('Clearing Authorization Header and tokens');
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }
};

// Function to refresh the access token
const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    console.log('Refreshing access token...');
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL_DEV}/token/refresh/`, {
      refresh: refreshToken,
    });

    const { access: newAccessToken} = response.data;

    console.log('New tokens received:', { newAccessToken});
    setAuthToken(newAccessToken, refreshToken);

    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing token:', error.response?.data || error);
    setAuthToken('', ''); // Clear tokens on failure
    return null;
  }
};

// Axios response interceptor
api.interceptors.response.use(
  (response) => response, // Pass through successful responses
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      console.warn('401 Unauthorized error, attempting to refresh token...');
      originalRequest._retry = true; // Mark request as retried

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        console.log('Retrying original request with new token');
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(originalRequest); // Retry the original request
      }
    }

    console.error('Request failed:', error.response?.data || error);
    return Promise.reject(error);
  }
);

// Add request interceptor to ensure Authorization header is set
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.warn('No token found, request might be unauthorized.');
    }
    console.log('Outgoing request:', config);
    return config;
  },
  (error) => {
    console.error('Error in request setup:', error);
    return Promise.reject(error);
  }
);

export default api;
