import { Request, Response, NextFunction } from "express"
import PostMessage from "../models/postMessage"

export const isAuthorized = async(req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const { id } = req.params
    const post:any = await PostMessage.findOne({_id: id}).lean().exec()
    if (post.creator.toString() === user._id.toString()){
        return next()
    }else{
        return res.status(400).json({data: 'user not authorized'})
    }
}