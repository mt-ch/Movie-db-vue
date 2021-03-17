import instance from "./clients/axiosClient";
const resource = "/top_rated";
const key = "?api_key=f9c3ae91ea7132ed424564f73bb859e0";
export default {
  get() {
    return instance.get(`${resource}${key}`);
  },
};
