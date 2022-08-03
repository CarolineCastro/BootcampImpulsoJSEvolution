const meuElemento = document.getElementById("meu-elemento");

meuElemento.classList.add("novo-estilo");
//adiciona a classe "meu estilo"

meuElemento.classList.remove("classe");
//remove a classe "classe"

meuElemento.classList.toggle("dark-mode");
//adiciona a classe "dark-mode" caso ela não faça parte da lista e remove caso ela faça

/*ACESSANDO DIRETAMENTE O CSS*/
document.getElementsByTagName("p").style.color = "blue";