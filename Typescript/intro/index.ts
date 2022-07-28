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
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) { //usando a condição para aceitar dois tipos diferentes
    if( 'cargo' in usuario){
        //redirecionar para a área de administração
    }

    //se nn redirecionar para a área do usuário
}



