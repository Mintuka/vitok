import {Request, Response} from 'express'
import User,{IUser} from '../models/User'
import bcrypt from 'bcrypt'
import { createToken } from './createToken'

export const login = async(req: Request, res: Response) => {
    const {email, password} = req.body
    console.log(email, 'loginE')
    const user: IUser = await User.findOne({email})
    console.log(password, user.password,'login')
    if (user){
        const auth = bcrypt.compare(password, user.password);
        if (!auth) {
          return res.status(200).json({message: 'incorrect password or email'})
        }
        const token = createToken(user._id)
        return res.status(200).json({email, token})
    }
    return res.status(200).json({message: 'User not registered'})
}