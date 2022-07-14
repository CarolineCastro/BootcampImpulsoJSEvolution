var jogador1 = 0;
var jogador2 = 0;
var placar;

/*ESTRUTURAS CONDICIONAIS*/

//IF
if(jogador1 > 0) {
    //do stuff
} //ELSE IF
else  if(jogador2 > 0)  {
    //do stuff
} //ELSE
else {
    //do stuff
}

//IF TERNÁRIO

/*if*/(jogador1 != -1) && (jogador2 != -2) ? /*do stuff*/ console.log('Os jogadores são válidos') : //else
console.log('Os jogadores são inválidos');


/*ESTRUTURAS DE DECISÃO*/

//SWITCH
switch (placar) {
    case placar = jogador1 > jogador2 :
        //do stuff
        break;
    case placar = jogador1 < jogador2 :
        //do stuff
        break;
    default :
        //do stuff
}

/*ESTRUTURAS DE REPETIÇÃO*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}

//FOR
for (let i = 0; i < array.length; i++){
    //do stuff
}

//FOR IN: executa repetição a partir de uma propriedade
for (let i in array){
    //do stuff
}

for (i in object){
    //do stuff
}

//FOR OF: executa repetição a partir de um valor
for (i of array){
    //do stuff
}

for (i of object.propriedade1){ //nn é indicado usar esse for com objetos
    //do stuff
}

//WHILE
var a = 0;

while (a < 10) {
    //do stuff
    a++;
}

//DO WHILE
do {
    a++;
    //do stuff
} while (a < 10)
