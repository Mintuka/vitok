import express,{Request, Response} from 'express';
import mongoose from 'mongoose';
import Like from '../models/Like';

import PostMessage from '../models/postMessage';

const router = express.Router();

export const getPosts = async (req:Request, res:Response) => { 
    try {
        const postMessages = await PostMessage.find().populate('likeId').lean().exec();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req:Request, res:Response) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id).populate('likeId').lean().exec();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req:Request, res:Response) => { 

    req.body.creator = req.body.user._id
    const like:any = await Like.create({userId: []})
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags, likeId: like._id })
    try {
        await newPostMessage.save();

        return res.status(201).json(newPostMessage );
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req:Request, res:Response) => { 
    const { id } = req.params;
    console.log('update',id)
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile};

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req:Request, res:Response) => { 
    console.log('delete backend')
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


// export default router;