import axios from "axios";

const api = axios.create({
  baseURL: "http://localizabus.com.br:21078/",
});

export default api;