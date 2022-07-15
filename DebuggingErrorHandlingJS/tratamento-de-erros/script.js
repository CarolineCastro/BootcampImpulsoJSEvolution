/*THROW*/

function verificaPalindromo(string){
    if (!string) throw "String inválida"; //antes quando era um return, retornava um string qqr. Agr com o throw irá retornar uma string de erro com tds as informações do pq ele ocorreu

    return string === string.split('').reverse().join('');
}

/*TRY/CATCH*/

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string);
    }
    catch(e){ //permite q o erro seja manipulado e tratado
        console.log(e) //aqui poderia ser um throw
    }
}

tryCatchExemplo(''); //String inválida

/*FINALLY*/

function tryCatchExemplo2(string){
    try{
        return verificaPalindromo(string);
    }
    catch(e){
        throw e;
    }
    finally{ //será executando independente do q aconteça, seu uso nn é obrigatório.
        console.log('A string envida foi: ' + string);
    }
}

tryCatchExemplo2(''); //A string enviada foi 