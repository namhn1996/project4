import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5555/api/v1/",
  headers: {
    "Content-Type": "Application/json",
  },
});

export default instance;
