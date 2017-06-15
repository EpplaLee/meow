import axios from 'axios'

export default {
    getAllPosts(page = 1, section = 'post', user = '') {
        return axios.get(`/api/posts?page=${page}&section=${section}&user=${user}`)
    } 
}