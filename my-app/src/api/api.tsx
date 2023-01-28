import axios from "axios"
import { Action } from "../state/actions_interface/interfaces"

const url = 'http://localhost:5000'
const user: any = JSON.parse(localStorage.getItem('user') || '')   
console.log(user) 
const token = user[0].token
const authAxios = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }
})
export const fetchPosts = () => axios.get(url+'/posts')
export const createPosts = (newPost: Object) => authAxios.post(url+'/posts', newPost)
export const updatePost = (_id: String) => authAxios.put<Action>(url+`/posts/${_id}`)
export const deletePost = (_id: String) => authAxios.delete(url+`/posts/${_id}`)
export const createUsers = (newUser: Object) => axios.post(url+'/users', newUser)
export const logInUsers = (user: Object) => axios.post(url+'/users/login', user)