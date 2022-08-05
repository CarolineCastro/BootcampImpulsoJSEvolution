import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken'
import userRepository from "../repositories/user.repository";


async function bearerAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {

    try {

        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais informadas');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if(authenticationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de autenticação inválida');
        }

        const tokenPaylod = JWT.verify(token, 'my_secret_key');

        if(typeof tokenPaylod !== 'object' || !tokenPaylod.sub){
            throw new ForbiddenError('Token inválido');
        }

        const uuid = tokenPaylod.sub;
        const user = await userRepository.findById(uuid);
        req.user = user;

        next();
    } catch (error) {
        next(error);
    }

}

export default bearerAuthenticationMiddleware;