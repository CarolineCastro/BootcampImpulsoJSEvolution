import { Router } from "express";

const routes = Router();

const database = ['Nath'];

routes.get('/users', (req, res) => {
    return res.status(200).json(database);
});

routes.post('/users', (req, res) => {
    const { name } = req.body

    database.push(name);

    return res.status(201).json({'mensagem': `Usuário ${name} criado`});
})

export { routes };