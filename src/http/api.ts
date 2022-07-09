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
  // const accessToken = getCookie("accessToken")
  // ? getCookie("accessToken")![1]
  // : null;
  // console.log(accessToken)
  // alert(accessToken)
  // console.log(accessToken);
  //   const accessToken = localStorage.getItem("accessToken");
  //   config.headers.Authorization = `Bearer ${accessToken}`;
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
