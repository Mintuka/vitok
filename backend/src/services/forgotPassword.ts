import {Request, Response, NextFunction} from 'express'
import { createToken } from '../services/createToken'
import User from '../models/User'
import { sendEmail } from './sendEmail'

export const forgotPassword = async(req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body
    const user = User.findOne({email})
    if (!user)
        return res.send(404).json({message: 'User not found'})
    const token = createToken((await user)._id)
    const isSent = sendEmail(email, `http:/localhost:3000/reset-password/${token}/${(await user)._id}`)
    if (isSent)
        return res.send(200).json({message: 'verification sent to email'})
    return res.send(404).json({message: 'unable to send verification'})
}