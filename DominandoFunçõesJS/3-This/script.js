/*THIS*/
//é uma palavra reservada q é uma referência de contexto. 

const PESSOA = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName; //aqui o this está se refererindo ao obj PESSOA, q é o msm q PESSOA.firstName.
    },
    getId: function(){
        return this.id;
    }
};

PESSOA.fullName(); // André Soares
PESSOA.getId(); // 1

//O valor do this pode mudar de acordo com o lugar no código onde foi chamado.
/*
CONTEXTO        REFERÊNCIA
em um obj       próprio obj
sozinha         obj global(janela do navegador)
função          obj global
evento          elemento q recebeu o evento
*/

//SOZINHA

    //SERVIDOR
    console.log(this); // []

    //NAVEGADOR
    this //Window{0: global, window: Window, self: Window, document: document, nome: "", location: Location, ...}

//DENTRO DE UMA FUNÇÃO
(function () {
    console.log(this); //Object[global]
})();

//EVENTO NO HTML
<body>
    <button id="my-btn" onclick ="console.log(this)">click me!</button>
</body> //elemento q recebeu o evento, ou seja button.

/*MANIPULANDO O VALOR DE THIS*/

//CALL
const PESSOA1 = {
    nome:'Miguel',
}
const ANIMAL = {
    nome: 'Murphy'
}

function getSomething(){
    console.log(this.nome);
}
getSomething.call(PESSOA1); //Miguel
//o call vai chamar o obj pessoa1, assim o this estará referenciando pessoa1.]

    //em uma função q tem argumentos
const MY_OBJ = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(MY_OBJ, 1, 5); //12


//APPLY

getSomething.apply(PESSOA1); //Miguel 
//nesse caso é a msm coisa q o call

    //em uma função q tem argumentos
soma.apply(MY_OBJ, [1, 5]); // 12
//a principal diferença entre o call e o apply é q os argumentos tem q ser passados através de um vetor.

//BIND
//Clona a estrutura da função onde é chamado e aplica o valor do objeto passado como parâmentro.

const RETORNA_NOMES = function(){
    return this.nome;
}

let bruno = RETORNA_NOMES.bind({nome: 'Bruno'}); //clone da função acima

bruno(); //Bruno



