import PopularRepository from './PopularRepository';
import TopRatedRepository from './TopRatedRepository';
import UpcomingRepository from './UpcomingRepository';
import MovieRepository from './MovieRepository';
import HomeRepository from './HomeRepository';

const repositories = {
    'home': HomeRepository,
    'popular': PopularRepository,
    'topRated': TopRatedRepository,
    'upcoming': UpcomingRepository,
    'movie': MovieRepository,
}
export default {
    get: name => repositories[name]
};