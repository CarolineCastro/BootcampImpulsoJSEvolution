/*TIPOS PRIMITIVOS */

//BOOLEANOS
var verdadeiroOuFalso = false;
console.log(typeof(verdadeiroOuFalso));


//NÚMERO
var numero = 1;
console.log(typeof(numero));

//STRING
var palavra = 'carol';
console.log(typeof(palavra));

/*MODOS DE DECLARAÇÃO*/

var variavel; //escopo local e global, pode ter seu valor alterado e se nn for inicializada será tratada como null

let variavel;//escopo local de bloco, pode ter seu valor alterado, se nn for inicializada será tratada como null

const CONSTANTE = 0; //escopo local de bloco, nn pode ter seu valor alterado, precisa ser inicializada


/*ESCOPO*/

//GLOBAL
var escopoGlobal = 'global';

//LOCAL
function escopoLocal (){
    let variavelInterna;
}

/*ATRIBUIÇÃO*/

var atribuicao = 1; // sinal de atribuição

var comparacao = '0' == 0; // sinal de comparação q retorna verdadeiro ou falso

var comparacaoidentica = '0' === 0; // sinal de comparação indêntica q compara o valor e o tipo

/*OPERADORES*/

//ADIÇÃO
var adicao = 1 + 1;

//SUBTRAÇÃO
var subtracao = 2 - 1;

//MULTIPLICAÇÃO
var multiplicacao = 2 * 2;

//DIVISÃO
var divisao = 6 / 2;

//MOD
var mod = 5 % 2;

//POTENCIAÇÃO
var potenciacao = 2 ** 10;

//MAIOR QUE
var maior = 5 > 2;

//MENOR QUE
var menor = 5 < 2

//MAIOR OU IGUAL A
var maiorOuIgual = 5 >= 2;

//MENOR OU IGUAL A
var menorOuIgual = 5 <= 2;

//AND
var and = true && false;

//OR
var or = true || false;

//NOT
var not = !true;
