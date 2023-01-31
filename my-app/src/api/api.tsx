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
export const updatePost = (_id: String, update: Object) => authAxios.put<Action>(url+`/posts/${_id}`, update)
                            // .catch(error => {
                            //     console.log('error',error.message, 'fix')
                            //     return error.message
                            // })
export const deletePost = (_id: String) => authAxios.delete(url+`/posts/${_id}`)
                            .catch(error => {
                                console.log('error',error,'delete')
                                return {message: error.response.data}
                            })
export const createUsers = (newUser: Object) => axios.post(url+'/users', newUser)
export const logInUsers = (user: Object) => axios.post(url+'/users/login', user)