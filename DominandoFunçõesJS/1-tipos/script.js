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