import jwt from 'jsonwebtoken';
import config from '../config/config'

const JWT_SECRET: any = process.env.JWT_SECRET; 

export const createToken = (id: any) : string => {
    return jwt.sign({ id }, JWT_SECRET), config.jwtSecret
};