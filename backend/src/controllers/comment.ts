import express,{Request, Response} from 'express';
import mongoose from 'mongoose';

import Comment from '../models/Comment';

const router = express.Router();

export const getComments = async (req:Request, res:Response) => { 
    try {
        const Comments = await Comment.find();
        res.status(200).json(Comments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getComment = async (req:Request, res:Response) => { 
    const { id } = req.params;

    try {
        const comment = await Comment.findById(id);
        
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createComment = async (req:Request, res:Response) => { 
    const { creator, post, comment } = req.body;
    const newComment = new Comment({ creator, post, comment })
    try {
        await newComment.save();
        console.log(newComment)

        res.status(201).json(newComment );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateComment = async (req:Request, res:Response) => { 
    const { id } = req.params;
    const { creator, post, comment } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Comment with id: ${id}`);

    const updatedComment = { creator, post, comment, _id: id };

    await Comment.findByIdAndUpdate(id, updatedComment, { new: true });

    res.json(updatedComment);
}

export const deleteComment = async (req:Request, res:Response) => { 
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Comment with id: ${id}`);

    await Comment.findByIdAndRemove(id);

    res.json({ message: "Comment deleted successfully." });
}

export default router;