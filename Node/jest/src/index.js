import express from 'express';

const server = express();


server.listen(5000, () => {
    console.log('Servidor ON porta 5000');
});