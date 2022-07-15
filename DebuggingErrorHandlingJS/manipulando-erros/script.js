/*OBJETO ERROR*/

new Error(message, fileName, lineNumber);

//tds os parâmentros são opcionais
const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;


