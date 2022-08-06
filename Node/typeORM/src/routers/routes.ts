import { Router, Response, Request } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';


const router = Router();
const createUserController = new CreateUserController;

router.get('/', (req: Request, res: Response) => {
    return res.json({mensagem: 'Bem Vindo'});
});

//GET
router.post('/users', createUserController.handle);

export { router };
