import React, { Fragment } from "react";

const store = ['', '', ''];


function Column() {
    return(
        <>
            <td>Tênis</td>
            <td>Tênis</td>
        </>
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