import axios from "axios";

axios.defaults.baseURL = process.env.React_App_Base_Url;

axios.defaults.headers.common["Authorization"] = 1;

export function get(url, config = {}) {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function post(url, params, config = {}) {
  return axios
    .post(url, params, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function put(url, params, config = {}) {
  return axios
    .put(url, params, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
export function del(url, params) {
  return axios
    .delete(url, params)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
