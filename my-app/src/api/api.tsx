import axios from "axios"
import { Action } from "../state/actions_interface/interfaces"

const url = 'http://localhost:5000'
var token = ''
if (localStorage.getItem('user')){
    const user: any = JSON.parse(localStorage.getItem('user') || '')   
    token = user.token
} 

const authAxios = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }
})
export const fetchPosts = () => axios.get(url+'/posts')
export const createPosts = (newPost: Object) => authAxios.post(url+'/posts', newPost)
export const updatePost = (id: String, update: Object) => authAxios.put<Action>(url+`/posts/${id}`, update)
                            .catch(error => {
                                return {updateMessage: error.response.data}
                            })

export const deletePost = (_id: String) => authAxios.delete(url+`/posts/${_id}`)
                            .catch(error => {
                                return {deleteMessage: error.response.data}
                            })
export const likePost = (postId: String) => authAxios.get(url+`/like/${postId}`)
                            .catch(error => {
                                return {likeMessage: error}
                            })

export const getComments = () => axios.get(url+'/comments')
export const createComment = (newComment: Object) => authAxios.post(url+'/comments', newComment)

export const createUsers = (newUser: Object) => axios.post(url+'/users', newUser)
export const logInUsers = (user: Object) => axios.post(url+'/users/login', user)