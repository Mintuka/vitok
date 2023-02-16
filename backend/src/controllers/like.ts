import { Request, Response } from "express";
import Like from "../models/Like";
import PostMessage from "../models/postMessage";

export const updatedLike = async (req:Request, res:Response) => { 
    const { postId } = req.params;
    const { userId } = req.body
    console.log(userId,'hello',postId)
    const post: any = await PostMessage.findById(postId);
    const like: any = await Like.findById(post.likeCount)
    let updatedLike = {}
    if (like){
        const isFound = userId._id.toString() === like.userId.find(id => id === userId._id.toString())
        console.log('is',isFound)
        if(isFound){
            const likes = like.userId.filter(id => id !== userId._id.toString())
            console.log('like',likes)
            updatedLike = await Like.findByIdAndUpdate(like._id, {userId: likes}, {new: true});
        }
        else{
            const likes = [...like.userId, userId._id]
            console.log('like',likes)
            updatedLike = await Like.findByIdAndUpdate(like._id, { userId: likes }, { new: true }); 
        }
        
    }
    else{
        const updatedLike = await Like.create({userId: [userId._id]})
        const updatePost = await PostMessage.findByIdAndUpdate(postId, {likeCount: updatedLike._id}, {new: true})
    }
    
    return res.json(updatedLike);
}