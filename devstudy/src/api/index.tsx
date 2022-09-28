import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
