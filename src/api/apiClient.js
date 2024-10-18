import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8081/api/auth', // 后端接口地址
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
