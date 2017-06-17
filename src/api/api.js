import axios from 'axios'
axios.defaults.timeout = 3000
axios.defaults.baseURL = 'http://localhost:3000'
export default {
  getAllPosts (section = 'post', page = 1, user = '') {
    return axios.get(`/api/posts?section=${section}&page=${page}&user=${user}`)
  },
  login (username, password) {
    return axios.get(`/api/login?username=${username}&password=${password}`)
  },
  signup (username, password) {
    return axios.get(`/api/signup?username=${username}&password=${password}`)
  }
}
