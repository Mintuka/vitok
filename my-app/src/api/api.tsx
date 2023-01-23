import axios from "axios"

const url = 'http://localhost:5000'

export const fetchPosts = () => axios.get(url+'/posts')
export const createPosts = (newPost: Object) => axios.post(url+'/posts', newPost)
export const createUsers = (newUser: Object) => axios.post(url+'/users', newUser)
export const logInUsers = (user: Object) => axios.post(url+'/users/login', user)