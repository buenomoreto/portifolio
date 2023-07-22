import axios from "axios";

const api = axios.create({
  baseURL: "https://portifolio-backend-beryl.vercel.app/",
});

export default api;