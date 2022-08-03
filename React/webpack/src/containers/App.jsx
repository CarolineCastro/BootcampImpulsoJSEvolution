import React from "react";
import mock from '../mock'
import Button from "../components/Button";

//Renderização Condicional
/*const buttonA = <button>Histórico</button>

const buttonB = <button>Cadastro</button>

const hasCustomer = true;

const App = () => {

    
    const renderShowHistory = () => {
        return (
            <div>
                Clique no Botão 
                <br/> 
                {buttonA}
            </div>
        );
    } 

    const renderAddCostumer = () => {
        return(
            <div> 
                Clique no Botão 
                <br/> 
                {buttonB} 
            </div>
        )
    } 

    const costumer = 'Caroline Castro'

    const showCostumer = () => {
        if(!hasCustomer) return null

        return (
            <div>
                <h1>Nome do Cliente: {costumer}</h1>
            </div>
        )
    }


    return (
        <div>
            <p>Digital Inovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            {hasCustomer ? renderShowHistory() : renderAddCostumer} 
            <div>
                {showCostumer()}
            </div>  
        </div>
    );
};

export default App;*/

//Listas e Chaves
/*const listCostumer = [
    {
        id: 1,
        name: 'Caroline Castro',
        skills:['react', 'node', 'css', 'webpack']
    }, 
    {
        id: 2,
        name: 'Gabrielle Castro',
        skills:['html', 'c', 'js']
    },
    {
        id: 3,
        name: 'Scheila Castro',
        skills: ['go', 'java']
    },
    {
        id: 4,
        name: 'Beto Silva',
        skills: ['assembly']
    },   
]

const App = () => {

    const renderSkills = (skill, id) => {
        return(
            <div style={{ paddingLeft: '30px'}} key={`skill-${id}`} >
                <li>{skill}</li>
            </div>
        )
    }

    const renderCostumers = (costumer, id) => {
        return(
            <div>
                <li key={`costumer-${id}`}>{costumer.name}</li>
                {costumer.skills.map(renderSkills)}
            </div>        
        )
    }

    return (
        <div>
            <p>Digital Inovation One</p>
            <p>Bem vindo a nossa aula =D</p>

            <div>
                <ul>
                    {listCostumer.map(renderCostumers)}
                </ul>
            </div>
        </div>
    );
};

export default App; */

//Manipulando Eventos
/*const App = () => {

    const name = 'DIO'

    const showEvent = (e) => {
        console.log('evento clicado');
        console.log(e);
        alert(name);
    }
    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
    }

    const Button = <button onClick={showEvent}>Mostrar Evento</button>

    return (
        <div>
            <p>Digital Inovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            <input onChange={handleChange} />
            {Button}
        </div>
    );
    
};

export default App;*/

//Manipulando Eventos exemplo 2


const App = () => {

    const handleClick = (id) => {
        console.log('deletar cliente');
        alert(`ID do cliente ${id}`)
    }

    const renderSkills = (skill, id) => {
        return(
            <div style={{ paddingLeft: '30px'}} key={`skill-${id}`} >
                <li>{skill}</li>
            </div>
        )
    }

    const renderCostumers = (costumer, id) => {
        return(
            <div>
                <li key={`costumer-${id}`}>
                    {costumer.name}
                    <Button onClick={() => handleClick(costumer.id)}>Deletar x</Button>
                </li>
                {costumer.skills.map(renderSkills)}
            </div>        
        )
    }

    return (
        <div>
            <p>Digital Inovation One</p>
            <p>Bem vindo a nossa aula =D</p>

            <div>
                <ul>
                    {mock.map(renderCostumers)}
                </ul>
            </div>
        </div>
    );
};

export default App;

