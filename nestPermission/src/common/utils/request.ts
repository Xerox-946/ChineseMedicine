import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';

// 定义请求配置接口
interface RequestConfig extends AxiosRequestConfig {
  headers?: AxiosRequestHeaders & {
    'access-token'?: string;
  };
}

// 定义响应数据接口
interface ResponseData {
  [key: string]: any;
}

const service: AxiosInstance = axios.create({
  timeout: 60000,
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   (config.headers as AxiosRequestHeaders & { 'access-token'?: string })['access-token'] = token;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器（保持不变）
service.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    const errorResponse: AxiosResponse<any, any> = {
      ...response,
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config: response.config,
    };
    return Promise.reject(errorResponse);
  },
  (error) => Promise.reject(error)
);

export default service;