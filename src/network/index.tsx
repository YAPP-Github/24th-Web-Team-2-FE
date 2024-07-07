import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from '@/hooks/cookies';
const fetchWrapper = async ({ method, url, body, params }: any) => {
  const config: AxiosRequestConfig = {
    //withCredentials: true,
    headers: {
      // "X-AUTH-TOKEN": getCookie("userToken"),
      // Authorization: getCookie('userToken'),
    },
    ...params,
  };

  try {
    const { data } =
      (method === 'get' && (await axios.get(url, config))) ||
      (method === 'post' && (await axios.post(url, body, config))) ||
      (method === 'put' && (await axios.put(url, body, config))) ||
      (method === 'patch' && (await axios.patch(url, body, config))) ||
      (method === 'delete' && (await axios.delete(url, config))) ||
      {};

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const GET = (url: string, params?: any) => fetchWrapper({ method: 'get', url, params });

export const POST = (url: string, body: any, params?: any) => fetchWrapper({ method: 'post', url, body, params });

export const PUT = (url: string, body: any, params: any) => fetchWrapper({ method: 'put', url, body, params });

export const PATCH = (url: string, body: any, params: any) => fetchWrapper({ method: 'patch', url, body, params });

export const DELETE = (url: string) => fetchWrapper({ method: 'delete', url });
