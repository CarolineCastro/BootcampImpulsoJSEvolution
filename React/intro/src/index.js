import React, { Component } from "react"
import ReactDOM /*{ render }*/  from "react-dom"
//import Button from "./button"
//import ComponentA from "./componentA"
//import ComponentB from "./componentB"
import "./styles.css"

/*JSX
function sum(a, b){
    return a + b
}

function primeiroJSX(){
    return (
        <div className="teste">
            Caroline Castro
            <h1>Soma: {sum(10,20)}</h1>
        </div>
    )
}

const App = () => {
    return(
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/

/*Componetes
const element = 'Alguma coisa'
const element2 = <h1>Olá Turma =D</h1>

function sum(a, b){
    alert(a + b);
}

function App () {
    return(
        <div> 
            {element}
            <Button onClick={() => sum(10, 20)} name = {element2}></Button>
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => sum(10, 20)} name = {element2}></Button>
                </ComponentB>
            </ComponentA>
        </div>
    )//retorna um componete q carrega os dois elementos
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);*/

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            clock: 1000,
            copo: 'água',
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                copo:"suco"
            })            
        }, 3000);
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })
    } 

    render() {
        const {clock, copo} = this.state;
        return(
            <div>
                <h1>{clock}</h1>
                <button onClick={ () => this.alterarCopo()}><h1>{copo}</h1></button>
            </div>
        )
    }
}


const rootElement = document.getElementById ("root");
ReactDOM.render(<App />, rootElement);

