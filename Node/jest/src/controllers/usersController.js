import  { database }  from "../database.js";

const usersController = {

    criarUsuario (req, res) {
        const { name } = req.body
    
        if(name.length < 1){
            return res.status(403).json({'mensagem': `Não é possível criar usuários sem um nome`});
        }
    
        database.push(name);
    
        return res.status(201).json({'mensagem': `Usuário ${name} criado`});
    },

    listarUsuario (req, res) {
        return res.status(200).json(database);
    }
}


export { usersController }