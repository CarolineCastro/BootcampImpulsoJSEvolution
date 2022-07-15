//FUNÇÃO ANÔNIMA: uma função q nn tem nome, elas são atribuidas a uma variável.

const SOMA = function(a,b){
    return a+b;
}

SOMA(1,2) //3

//FUNÇÃO AUTOINVOCÁVEL: Uma função anônima entre parênteses, seguida por outra par de parênteses, que representa a sua chamada.

(function(a,b){
    return a+b;
})(1, 2);

//CALLBACKS: Uma função passada como argumento para outra função.

const CALC = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const SOMA2 = function(num1, num2){
    return num1+num2;
}

const RESULT = CALC(SOMA2, 1, 2);

//ARROW FUNCTIONS
const helloWorld = () => {
    return "Hello World";
}
    //ou
const helloWorld1 = () => "Hello World";

//caso tenha só uma linha, pode dispensar as chaves e o return. E caso exista apenas um parâmetro, pode dispensar os parêntes.
//arrow functions nn fazem hosting
//o this sempre será o obj global. Métodos para modificar seu valor nn irão funcionar
//nn existe o objeto arguments
//o construtor (ex: new MeuObjeto()) também não pode ser utilizado.