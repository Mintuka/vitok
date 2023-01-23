import jwt from 'jsonwebtoken'
const secret = 'secret'

export const createToken = (_id: any) => {
    return jwt.sign({_id}, secret, {expiresIn: 30*24*60*60})
}