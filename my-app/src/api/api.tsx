import axios from "axios"
import { Action as commentAction } from "../state/actions_interface/comment_interface/interfaces"
import { Action as postAction } from "../state/actions_interface/post_interface/interfaces"

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
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const createPosts = (newPost: Object) => authAxios.post(url+'/posts', newPost)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })
export const updatePosts = (id: String, update: Object) => authAxios.put<postAction>(url+`/posts/${id}`, update)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const deletePost = (_id: String) => authAxios.delete(url+`/posts/${_id}`)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })
export const likePost = (postId: String) => authAxios.get(url+`/like/${postId}`)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const getComments = () => axios.get(url+'/comments')
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const createComment = (newComment: Object) => authAxios.post(url+'/comments', newComment)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const deleteComment = (commentId: String) => authAxios.delete(url+`/comments/${commentId}`)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const updateComment = (id: String, update: Object) => authAxios.put<commentAction>(url+`/comments/${id}`, update)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const createUsers = (newUser: Object) => axios.post(url+'/users', newUser)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const logInUsers = (user: Object) => axios.post(url+'/users/login', user)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })