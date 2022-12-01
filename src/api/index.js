import axios from 'axios'

const Api = axios.create({ baseURL: 'http://localhost:5000' })

export const addNewPost = async (post) => {
  const { data } = await Api.post('/posts/new', post, { headers: {'Content-type': 'application/json; charset=UTF-8'} })
  return data
}

export const newUser = async (user) => {
  const { data } = await Api.post('/users/signup', user, { headers: {'Content-type': 'application/json; charset=UTF-8'} })
  return data
}

export const login = async (cred) => {
  const { data } = await Api.post(`/users/login`, cred, { headers: {'Content-type': 'application/json; charset=UTF-8'} })
  return data
}

export const getUsers = async () => {
  const { data } = await Api.get(`/users`, { headers: {'Content-type': 'application/json; charset=UTF-8'} })
  return data
}

export const getPosts = async () => {
  const { data } = await Api.get('/posts')
  return data
}

export const likePost = async (idPost, userEmail) => {
  const { data } = await Api.put(`/posts/${idPost}`, { userEmail })
  return data
}

export const logout = async () => {
  const { data } = await Api.post(`/users/logout`)
  return data
}

export default Api
