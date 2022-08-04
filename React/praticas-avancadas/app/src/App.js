import React, { Fragment } from "react";

const store = [{
    type: 'Roupa'
}, {
    type: 'Calçado'
}, {
    type: 'Camiseta'
}];


function Column({ type }) {
    return(
        <tr>
            <td>{type}</td>
        </tr>
    );
}

function App () {
    const renderColumns = (elemnet, key) => (
        <Fragment key={`column-${key}`}>
            <Column />
        </Fragment>
    );
    
    return (
        <table>
            {store.map(renderColumns)}
        </table>   
    );
}

export default App;