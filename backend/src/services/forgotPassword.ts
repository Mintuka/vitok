import {Request, Response, NextFunction} from 'express'
import { createToken } from '../services/createToken'
import User from '../models/User'
import { sendEmail } from './sendEmail'

export const forgotPassword = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const { email } = req.body
        const user = await User.findOne({email})
        if (!user)
            return res.status(404).json({message: 'User not found'})
        const token = createToken(user._id)
        const isSent = await sendEmail(email, `http:/localhost:3000/reset-password/${token}/${user._id}`)
        console.log('isSent',isSent)
        if (isSent)
            return res.status(200).json({message: 'verification sent to email'})
        return res.status(400).json({message: 'unable to send verification'})
    
    }catch(e){
        return res.status(404).json({message: e})
    }
}