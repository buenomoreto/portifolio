import axios from "axios";

const api = axios.create({
  baseURL: "http://localizabus.kinghost.net:21078/",
});

export default api;