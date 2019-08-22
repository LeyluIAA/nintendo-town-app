import axios from 'axios'

const API_URL = 'https://www.nintendo-town.fr/wp-json/wp/v2'

export default {
  getAll(pageNumber) {
    return axios.get(`${API_URL}/posts?page=${pageNumber}`)
  }
}
