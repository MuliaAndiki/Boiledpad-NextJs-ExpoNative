import axios, { AxiosError } from "axios";
import Constants from "expo-constants";

import { store } from "@/stores/store";

const BASE_URL = Constants.expoConfig?.extra?.BACKEND_URL;

const AxiosClient = axios.create({
  baseURL: BASE_URL,
});

AxiosClient.interceptors.request.use(
  (config: any): any => {
    const token = store.getState().auth.currentUser?.user.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

export default AxiosClient;
