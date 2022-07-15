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


/*HOSTING*/
//váriaveis não declaradas são automaticamnte lidas como var. Isso não acontece caso, posteriormente a váriavel seja declarada como let

numberOne = 1;
console.log(numberOne + 2);


//O let como é escopo de bloco, nn altera valores de uma var, msm sendo declarada depois. E variáveis declaradas com let nn podem ser redeclaradas. Ou seja, não fazem hosting.

var firstName = "João";
var lastName = "Souza";

if(firstName === "João") {
    var firstName = "Pedro";
    let lastName = "Silva";
}

console.log(firstName, lastName); // a saída será Pedro e Souza

//constantes não fazem hosting.

/*APROFUNDANDO EM STRINGS*/

//CONCATENAÇÃO DE STRINGS
let nome = "João";
let sobrenome = "Pedro";

let concatenado = nome.concat(sobrenome);
    //ou
concatenado = nome + sobrenome;
concatenado = nome + " " + sobrenome;
concatenado = nome + "\n" + sobrenome;
concatenado = `${nome} ${sobrenome}`;
concatenado = `${nome} 
${sobrenome}`;

//TAMANHO DE STRINGS
let tamanho = nome.length;

//STRINGS COMO OBJETOS
let exemplo = new String("blablabla");

    //esse obj retorna o conteúdo indexado e todos os método da String. Por default, o js entende q o tipo primitivo string é a mesma coisa que o obj, por isso é possível usar os métodos do obj String no tipo primitivo. A principal diferença é q no obj a string é mais complexa.

//SPLIT
let frase = "Olá, tudo bem?"
frase.split(""); //irá retornar cada caracter da frase separados, inclundo o espaaço e a vírgula.

frase.split(" "); //irá retornar cada palavra, sem os espaços e a vírgula.

//INCLUDES
frase.includes("tudo"); //retorna um booleano

//STARTS WITH
frase.startsWith("O"); //tbm retorna um booleano

//ENDS WITH
frase.endsWith("?"); //tbm retorna um booleano

//REPLACE
let stringModificada = frase.replace(",", "!"); //irá retornar uma nova string.



/*APROFUNDAMENTO EM NÚMEROS*/

//MATH 
//É um objeto com vários métodos q retornam valores ou equações mátemáticas.

Math.PI; //retorna PI

let fracao = 5/3;
Math.floor(fracao); //retorna o valor arredondado para baixo
Math.ceil(fracao); //retorna o valor arredondado para baixo

//TO STRING
let fracaoString = fracao.toString();

    //o to string converte qualquer tipo primitivo para string, números, booleanos...







