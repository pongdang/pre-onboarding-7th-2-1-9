import axios, { AxiosRequestConfig } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AxiosRequestHeaders = AxiosRequestConfig<any>['headers'];

const instance = axios.create({
  baseURL: 'https://preonboarding.platdev.net/api',
  timeout: 30_000,
});

instance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error?.response?.data?.message != null) {
      return Promise.reject(new Error(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

export const get = <T>({
  url,
  params,
  headers,
}: {
  url: string;
  params?: Record<string, string>;
  headers?: AxiosRequestHeaders;
}) => {
  return instance.get<T>(url, { headers, params });
};
