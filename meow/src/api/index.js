import axios from 'axios'
axios.defaults.timeout = 3000
axios.defaults.baseURL = 'http://localhost:3000'
export default {
  getAllPosts (section) {
    return axios.get(`/api/posts?section=${section}`)
  },
  getPost (postId) {
    return axios.get(`/api/post/${postId}`)
  },
  login (username, password) {
    return axios.get(`/api/login?username=${username}&password=${password}`)
  },
  signup (username, password) {
    return axios.get(`/api/signup?username=${username}&password=${password}`)
  },
  pushPost (content, url, type, user) {
    return axios({
      method: 'POST',
      url: '/api/push',
      data: {
        content: content,
        url: url,
        post_type: type,
        user: user
      }
    })
  },
  pushComment (content, user, id) {
    return axios({
      method: 'POST',
      url: '/api/comment',
      data: {
        content: content,
        user: user,
        id: id
      }
    })
  }
}
