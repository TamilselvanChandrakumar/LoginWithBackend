import axios from "axios";

const baseurl = "http://localhost:3000/api";

export const axiosPost = (url, data) => {
  return axios.post(`${baseurl}${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const axiosLoginPost = (url, data) => {
  return axios.post(`${baseurl}${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const axiosGenreateOtp = (url, data) => {
  return axios.post(`${baseurl}${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const axiosVerifyOtp = (url, data) => {
  return axios.post(`${baseurl}${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
