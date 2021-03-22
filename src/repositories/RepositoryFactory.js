import MovieRepository from './MovieRepository';
import HomeRepository from './HomeRepository';

const repositories = {
    'home': HomeRepository,
    'movie': MovieRepository,
}
export default {
    get: name => repositories[name]
};