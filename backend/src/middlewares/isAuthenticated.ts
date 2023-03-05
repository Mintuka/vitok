import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express"
import User from '../models/User'
import { secret } from '../services/createToken';

interface JwtPayload {
    _id: string;
}

export const isAuthenticated = async(req:Request, res:Response, next:NextFunction) => {
    const { authorization } = req.headers
    if (!authorization){
        return res.status(401).json({error: 'Authorization tokend required'})
    }
    const token = authorization.split(' ')[1]
    console.log('tn',token)
    try{
        console.log('hello')
        const {_id} = jwt.verify(token, secret) as JwtPayload
        console.log('id',_id)
        req.body.user = await User.findOne({_id})
        console.log(req.body.user)
        if (req.body.user){
            next()
        }
        return
    }catch(err){
        res.status(400).json({error: err})
    }
}