

//Solução 1
function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string; //o split irá retornar um vetor com as letras separadas, o reserve irá colocar o vetor do split na ordem contrária e o join para unir todos os elementos do vetor e retornar uma string. Assim comparamos as duas strings, para saber se são iguais.
}


console.log(verificaPalindromo("ovo"));

//Solução 2: melhor solução.
function verificaPalindromo2(string) {
    if(!string) return "String inexistente";

    for (let i = 0; i < string.lenght/2; i++) {
        if (string[i] !== string[string.length-1-i]){
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"));