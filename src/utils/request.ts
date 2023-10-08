import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 创建自定义的请求配置
const customConfig: AxiosRequestConfig = {
  baseURL: 'https://api.example.com', // 设置基本URL
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json', // 设置请求的 Content-Type
  },
};

// 创建 Axios 实例
const instance = axios.create(customConfig);

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前可以做一些处理，例如设置请求头
    return config;
  },
  (error) => {
    // 当请求错误时，可以进行适当的处理
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理，例如解析 JSON 数据
    return response.data;
  },
  (error: AxiosError) => {
    // 当响应错误时，可以进行适当的处理
    return Promise.reject(error);
  }
);

// 封装 GET 请求
export const get = <T>(url: string, params?: any): Promise<T> => {
  return instance.get(url, { params });
};

// 封装 POST 请求
export const post = <T>(url: string, data: any): Promise<T> => {
  return instance.post(url, data);
};
export default instance;
