import instance from './clients/axiosClient';
const recommendations = '/recommendations'
const credits = '/credits'
const key = "?api_key=f9c3ae91ea7132ed424564f73bb859e0"

export default {
    get(id) {
        return instance.get(`/${id}${key}`);
    },
    getRecommendations(id) {
        return instance.get(`/${id}${recommendations}${key}`);
    },
    getCredits(id) {
        return instance.get(`/${id}${credits}${key}`);
    }
};