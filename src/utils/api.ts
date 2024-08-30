/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-promise-reject-errors */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL, LANGUAGE_DISPLAY } from './config';
import Helper from './helpers';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const authToken = Helper.getAuthToken();
  const requestConfig: any = {
    ...config,
    // Parse server
    // 'X-Parse-Application-Id': APP_ID,
    // 'X-Parse-REST-API-Key': REST_KEY,
    // ...(authToken ? { 'X-Parse-Session-Token': authToken } : {}),
  };
  // Adonis
  if (authToken) {
    requestConfig.headers.Authorization = `Bearer ${authToken}`;
  }
  requestConfig.headers['Accept-Language'] = Helper.getLang() || LANGUAGE_DISPLAY;
  requestConfig.headers['accept'] = 'application/json';
  return requestConfig;
});

api.interceptors.response.use(
  (response) => response.data,
  ({ message, response }) => {
    if (response?.data) {
      return Promise.reject({
        message: response.data.error.message || response.data.message || message,
        code: response.data.error.code ?? -1,
        status: response.status,
      });
    }
    return Promise.reject({ message, code: response?.status ?? -1 });
  },
);

const checkErrorCode = async (error: { status: number; }) => {
  if (error.status === 401 || error.status === 403) {
    Helper.removeAuthToken();
    setTimeout(() => {
      if (window.location.pathname.search('login') === -1) {
        window.location.href = '/login';
      }
    }, 1000);
  }
};

class apiInstance {
  constructor(protected readonly apiUrl: string) {}

  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return api
      .get(`${Helper.getUrl(url, this.apiUrl)}`, config)
      .then((response) => response)
      .catch(function (error) {
        checkErrorCode(error);
        throw error;
      });
  }

  post(url: string, payload: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return api
      .post(`${Helper.getUrl(url, this.apiUrl)}`, payload, config)
      .then((response) => response)
      .catch(function (error) {
        checkErrorCode(error);
        throw error;
      });
  }

  put(url: string, payload: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return api
      .put(`${Helper.getUrl(url, this.apiUrl)}`, payload, config)
      .then((response) => response)
      .catch(function (error) {
        checkErrorCode(error);
        throw error;
      });
  }

  patch(url: string, payload: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return api
      .patch(`${Helper.getUrl(url, this.apiUrl)}`, payload, config)
      .then((response) => response)
      .catch(function (error) {
        checkErrorCode(error);
        throw error;
      });
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return api
      .delete(`${Helper.getUrl(url, this.apiUrl)}`, config)
      .then((response) => response)
      .catch(function (error) {
        checkErrorCode(error);
        throw error;
      });
  }
}

export default apiInstance;
