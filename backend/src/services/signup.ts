import {Request, Response} from 'express'
import User, { IUser } from '../models/User'
import bcrypt from 'bcrypt'
import { createToken } from './createToken'

export const signup = async(req: Request, res: Response) => {
    try{
        console.log('signup')
        const {email, password} = req.body
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password,salt)
        const user: IUser = await User.create({email:email,password:hash})
        const token = createToken(user._id)
        return res.status(200).json({email, token})
    }catch(err){
        return res.status(400).json({message: err})
    }

}