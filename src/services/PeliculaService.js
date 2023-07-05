import axios from 'axios';
class PeliculaService {
    getAll() {
        return axios.get(`http://localhost:3000/pelicula`);
    }

    getByName(name) {
        return axios.get(`https://www.omdbapi.com/?apikey=7e2c9ae9&s=${name}`);
    }

    create(data) {
        return axios.post('http://localhost:3000/pelicula', data);
    }
}

export default new PeliculaService();
