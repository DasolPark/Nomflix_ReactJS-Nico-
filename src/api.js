import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f596dd7d9a5491647a16554b105ed63c",
    language: "en-US"
  }
});

api.get("tv/popular");

export default api;
