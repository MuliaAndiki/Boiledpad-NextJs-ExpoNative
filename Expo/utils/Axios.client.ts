import axios from "axios";

import Constants from "expo-constants";
const BASE_URL = Constants.expoConfig?.extra?.BACKEND_URL;

if (!BASE_URL) {
  console.error("BACKEND_URL is not set in app.json extra field!");
}

const AxiosClient = axios.create({
  baseURL: BASE_URL,
});

export default AxiosClient;
