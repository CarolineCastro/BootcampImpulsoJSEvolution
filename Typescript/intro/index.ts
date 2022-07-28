//INTERFACES: usamos para definir contratos de estruturas de dados, de classes;
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;

   //executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

//TYPE: usamos para fazer junções das interfaces;
type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
}

//TRATANDO A TAG INPUT
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
});

//TIPOS GENÉRICOS
function addApendiceLista<T>(array: T[], valor: T) /*implica numa função genérica*/{
    return array.map(() => valor);
}

addApendiceLista([1, 2, 3], 1); //como nn foi definido o q a função recebe e retorna, então todos os valores são do tipo any

//após o definir um tipo genérico T, a função lida com o tipo do dado enviado.


//DESENVOLVENDO CONDICIONAIS A PARTIR DE PARÂMENTRSO

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor' | 'funcionário';
}

function redirecione(usuario: IUsuario | IAdmin) { //usando a condição para aceitar dois tipos diferentes
    if( 'cargo' in usuario){
        //redirecionar para a área de administração
    }

    //se nn redirecionar para a área do usuário
}


//CARACTER ? PARA VARIÁVEIS OPCIONAIS
interface IUsuario2 {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionário';
}

function redirecionar2(usuario: IUsuario2) {
    if (usuario.cargo){
        //redirecionar (usuario.cargo)
    }

    //redirecionar para a área do usuário
}

//CRIANDO VARIÁVEIS COMM PROPRIEDADE READONLY E PRIVATE

interface ICachorro{
   nome: string;
   idade: number;
   parqueFav?: string;
}

type CachorroSomenteLeitura = {
    /*+ indica que aqui sofreu modificação*/readonly [K in keyof ICachorro] /*-? remove os opcionais*/: ICachorro[K]; //para cada K no "chaveiro(keyof)" de cachorro então cachorro indexado por K
}

class MeuCachorro implements ICachorro {
    idade;
    nome;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);