import axios from "axios";

export const instance = axios.create({
  baseURL: "http://34.64.70.191:8080/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
