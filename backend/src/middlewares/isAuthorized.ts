import { Request, Response, NextFunction } from "express"
import PostMessage from "../models/postMessage"

export const isAuthorized = async(req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body
    const { id } = req.params
    const post:any = await PostMessage.findOne({_id: id}).lean().exec()
    console.log(post.creator, post, userId, 'compare')
    if (post.creator === userId){
        return next()
    }else{
        return res.status(400).json({data: 'user not authorized'})
    }
}