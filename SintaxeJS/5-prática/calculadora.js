function calculadora() {
    let operacao = Number(prompt('Escolha uma operação:\n1-Soma(+) \n2-Subtração(-)\n3-Multiplicação(*) \n4-Divisão(/) \n5-Módulo(%) \n6-Potenciação(**)'));  
    
    if (!operacao || operacao < 0 || operacao >= 7){
        alert(`Erro - operação inválida!`);
        calculadora();
    } else {
    
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if(!n1 || !n2){
            alert(`Erro - parâmentros inválidos!`);
            calculadora();
        } else {

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function modulo() {
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação? \n1-sim \n2-não');
    
                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert(`Até mais!`);
                } else {
                    alert(`Digite uma opção válida!`);
                    novaOperacao();
                }
            }
    
        }

        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3: 
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                modulo();
                break;
            case 6:
                potenciacao();
                break;
        }
    }

}

calculadora();

