import axios from "axios";

const baseDomain = "https://api.themoviedb.org/3/movie/";
const baseURL = `${baseDomain}`;

const instance = axios.create({
  baseURL,
  method: "get",
});

export default instance;
