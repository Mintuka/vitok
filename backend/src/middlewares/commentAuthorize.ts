import { Request, Response, NextFunction } from "express"
import Comment from "../models/Comment"

export const isAuthorized = async(req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const { id } = req.params
    const comment:any = await Comment.findOne({_id: id}).lean().exec()
    if (comment.creator.toString() === user._id.toString()){
        return next()
    }else{
        return res.status(401).json({data: 'user not authorized'})
    }
}