import axios, { AxiosInstance } from 'axios';

// Create Axios instance
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.MODE === 'production'
    ? import.meta.env.API_BASE_URL_PROD
    : import.meta.env.API_BASE_URL_DEV,
});


export const setAuthToken = (token: string, refreshToken: string): void => {
  if (token && refreshToken) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }
};

// Function to refresh the token
const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token available');

    // Call the refresh token endpoint
    const response = await axios.post(`${import.meta.env.API_BASE_URL_DEV}/auth/refresh`, {
      refreshToken,
    });

    const { accessToken, refreshToken: newRefreshToken } = response.data;


    setAuthToken(accessToken, newRefreshToken);

    return accessToken;
  } catch (error) {
    console.error('Error refreshing token', error);
    return null;
  }
};


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;


    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
       
        api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

      
        return api(originalRequest);
      }
    }


    return Promise.reject(error);
  }
);

export default api;
