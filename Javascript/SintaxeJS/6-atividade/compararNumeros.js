function comparaNumeros(num1, num2){
    if(!num1 || !num2) return 'Defina dois números!';

    const PRIMEIRAFRASE = criaPrimeiraFrase(num1, num2);
    const SEGUNDAFRASE = criaSegundaFrase(num1, num2);

    return `${PRIMEIRAFRASE} ${SEGUNDAFRASE}`;
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2){
    const SOMA = num1 + num2;
    const COMPARA10 = SOMA > 10;
    const COMPARA20 = SOMA > 20;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if(COMPARA10){
        resultado10 = 'maior';
    }

    if (COMPARA20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${SOMA}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(20,20));
