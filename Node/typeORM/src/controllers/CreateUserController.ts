import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {

    handle (req:Request, res:Response) {

        const createUserService = new CreateUserService();
        
        const nome = req.body.nome;
        const email = req.body.email;

        if(nome.length === 0){
            return res.status(400).json({mensagem: 'Preencha todos os campos'});
        }

        const user = createUserService.execute({nome, email});

        return res.status(201).json({user});
    }

}

export { CreateUserController };