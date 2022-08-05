import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken'
import userRepository from "../repositories/user.repository";


async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {

    try {

        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais informadas');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if(authenticationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de autenticação inválida');
        }

        try {

            const tokenPaylod = JWT.verify(token, 'my_secret_key');

            if(typeof tokenPaylod !== 'object' || !tokenPaylod.sub){
                throw new ForbiddenError('Token inválido');
            }

            const user = {uuid: tokenPaylod.sub, username: tokenPaylod.username};
            req.user = user;

            next();
            
        } catch (error) {
            throw new ForbiddenError('Token Inválido');   
        }

        
    } catch (error) {
        next(error);
    }

}

export default jwtAuthenticationMiddleware;