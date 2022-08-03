/*VALORES PADRÃO*/

function exponencial(array, num = 1){ //o num recebe como valor padrão o 1, caso na chamada da função nn seja passado o parâmentrp para ele.
    const result = [];

    for(let i = 0; i < array.lenght; i++){
        result.push(array[i] ** num)
    }
    return result;
}

exponencial([1, 2, 3, 4]);
exponencial([1, 2, 3, 4], 2); //como aqui foi passado o 2 como parâmetro para num, então ele irá usar esse valor ao invés do valor padrão.


/*OBJETO "ARGUMENTS"*/
//Uma função com quantidade de argumentos indefinida. Então é usado o objeto arguments, que é um array com todos os parâmentros passados quando a função foi invocada

function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
findMax(1, 2, 3, 4, 5); //saída: 5.

function showArgs(){
    return arguments;
}

showArgs(1, 2, [2,3,4], "string"); //saída: { '0': 1, '1': 2, '2': [ 2, 3, 4 ], '3': 'string' }

/*VETORES*/

//SPREAD: uma forma de lidar separadamente com elementos. O q era parte de um vetor se torna um elemento independente.

function sum(x, y, z){
    return x+y+z;
}

const NUMBERS =  [1, 2, 3];
console.log(sum(...NUMBERS));// como a variável passada é um vetor, se passado da forma tradicional, apenas o primeiro parâmentro será passado. Mas usando o spread q são os ... antes da váriavel, ele irá pegar cada item do vetor e passar para função separadamente, preenchendo assim os três parâmentros esperados.


//REST: combina os argumentos em um vetor. O q era um elemento independente se torna parte de um vetor.

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho(); //0
confereTamanho(1, 2); //2
confereTamanho(3, 4, 5); //3


/*OBJETOS*/

//OBJECT DESTRUCTURING: Entre chaves podemos filtrar apenas os dados q nos interessam em um objeto.

const USER = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(USER); //42
getFullName(USER); //John Doe
