import instance from "./clients/axiosClient";
const key = "?api_key=f9c3ae91ea7132ed424564f73bb859e0";
const popular = "/popular";
const upcoming = "/upcoming";
const topRated = "/top_rated";

export default {
  getPopular() {
    return instance.get(`${popular}${key}`);
  },
  getUpcoming() {
    return instance.get(`${upcoming}${key}`);
  },
  getTopRated() {
    return instance.get(`${topRated}${key}`);
  },
};
