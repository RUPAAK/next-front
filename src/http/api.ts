import axios from "axios";
import { configuration } from "config";
import { access } from "fs";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts!.pop()!.split(";").shift();
}

const api = axios.create({
  baseURL: configuration.apiUrl,
});

api.defaults.headers.post["Content-Type"] = "application/json";
// api.defaults.withCredentials = true;

api.interceptors.request.use((config) => {
  const accessToken =
    "fdafdb28c048b8e177a487c5179dada62a7ea42e4e9a797c3af1784bfd92be1672cfd45a828a9d2440ffa4deb01159e741ad4ba36ccff8fcc580c58409bc50ac7ac08a9f9a65c0e834b3a8f730523a40b4fb8e4b4431f9e84667ebf9b7a785ce7352f4ab2f97ea536dc633440de9d341a73201c6ffaf0ec581f72f6f9443c012";

  config!.headers!.Authorization = `Bearer ${accessToken}`;
  return config;
});

api.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  async (response) => {
    if (response.status >= 200 && response.status < 300) {
      const { data } = response;
      return Promise.resolve(response.data);
    }
  },
  async (error) => {
    if (error && error.message === "Network Error") {
      // window.location.href = '/500';
    }
    // const { response, request } = error;
    // if (response) {
    //   if (response.status === 401) {
    //     localStorage.removeItem("accessToken");
    //     window.location.href = "/login";
    //   }
    //   if (response.status >= 400 && response.status < 500) {
    //     return Promise.reject(response.data);
    //   }
    // } else if (request) {
    //   return null;
    // }
    return Promise.reject(error);
  }
);

export { api };
