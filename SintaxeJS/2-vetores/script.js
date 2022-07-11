/*VETORES*/

//DECLARAÇÃO
let array = ['string', 1, true];

let array1 = ['string', 1, true, ['array2'], ['array3'], ['array4']]; //vetores em js podem conter todo tipo de dado, incluindo outros vetores

//MANIPULAÇÃO
array.forEach(function(item, indice){console.log(item, indice)}); //executa uma função para cada índice do vetor

array.push('novo item'); //add item no final do vetor

array.pop(); //remove item no final do vetor

array.shift(); //remove item no início do vetor

array.unshift('novo item inicio'); //add item no ínicio do vetor

array.indexOf(true); //retorna o índice de um valor

array.splice(0, 3); //remove ou substitui um item pelo índice

let novoArray = array.slice(0, 3); //retorna uma parte de um vetor existente

/*OBJETOS*/

let objeto = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ["array"],
    objetoInterno: {
        objetoInterno: 'objeto interno'
    },
}; 

objeto.string; //acessando um dado do objeto
objeto.objetoInterno.objetoInterno; //acessando um dado de um objeto que está dentro de outro objeto

var string = objeto.string; //atribuindo um valor de um objeto a uma variável

var {string, boolean, objetoInterno} = objeto; //uma variável que pega td o objeto ou campos específicos