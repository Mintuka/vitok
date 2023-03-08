import { Request, Response } from "express";
import Like from "../models/Like";
import PostMessage from "../models/postMessage";

export const updatedLike = async (req:Request, res:Response) => { 
    const { postId } = req.params;
    const { user } = req.body
    console.log(user,'hello like',postId)
    const post: any = await PostMessage.findById(postId);
    const like: any = await Like.findById(post.likeId)
    let updatedLike = {}
    if (like){
        const isFound = user._id.toString() === like.userId.find(id => id === user._id.toString())
        if(isFound){
            const likes = like.userId.filter(id => id !== user._id.toString())
            console.log('like',likes)
            updatedLike = await Like.findByIdAndUpdate(like._id, {userId: likes}, {new: true});
        }
        else{
            const likes = [...like.userId, user._id]
            console.log('like',likes)
            updatedLike = await Like.findByIdAndUpdate(like._id, { userId: likes }, { new: true }); 
        }
        
    }
    else{
        const updatedLike = await Like.create({userId: [user._id]})
        const updatePost = await PostMessage.findByIdAndUpdate(postId, {likeId: updatedLike._id}, {new: true})
    }
    
    return res.json(updatedLike);
}