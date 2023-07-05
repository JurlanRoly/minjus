import axios from 'axios';
class ListService {
    getAll() {
        return axios.get(`/priority`);
    }

    getById(id) {
        return axios.get(`/priority/${id}`);
    }

    create(data) {
        return axios.post('/priority', data);
    }

    update(id, data) {
        return axios.patch(`/priority/${id}`, data);
    }

    delete(id) {
      return axios.delete(`/priority/${id}`);
    }
}

export default new ListService();
