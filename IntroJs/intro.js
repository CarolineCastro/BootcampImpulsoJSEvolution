//DECLARAÇÃO DE VARIÁVEIS

var preco = 2; //boas práticas pedem para nomear as váriaveis de forma clara.
var desconto = 0.2;
const IMPOSTO = 2; //constantes devem ser nomeadas em caixa alta.

preco = preco - desconto;

var total = preco + IMPOSTO;

//em js as váriavies nn precisam ser pré-declaradas com um tipo, a atribuição já define o tipo da variável.

//DECLARAÇÃO DE FUNÇÕES

function soma (a, b){
    console.log(a + b); //apenas para ver se a função está retornando o esperado.
    return a + b;
}

soma (3, 5);