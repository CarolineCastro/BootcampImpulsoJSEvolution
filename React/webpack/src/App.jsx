import React from "react";
//import Button from "./Button.js";

const buttonA = <button>Histórico</button>

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

export default App;