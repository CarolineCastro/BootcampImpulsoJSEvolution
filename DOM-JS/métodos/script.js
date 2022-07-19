/*MÉTODOS MANIPULATIVOS*/
document.getElementById('titulo');
//<h1 id="titulo">Minha página</h1>

document.getElementsByTagName('li');
/*
<li>Projeto 1</li>
<li>Projeto 2</li>
<li>Projeto 3</li>
 */

document.getElementsByClassName('textos');
//<section class="textos">...</section>


/*MÉTODOS DE BUSCA*/
document.querySelectorAll('.textos');
//<section class="textos">...</section>

document.querySelectorAll('li .opcao');
//<li class="opcao"> Projeto 1</li>


/*MÉTODOS DE ADICIONAR E DELETAR*/
document.createElement(element); //cria novo elemento HTML

document.removeChild(element); //remove elemento

document.appendChild(element); //adiciona elemento

document.replaceChild(novo, old); //substitui elemento

