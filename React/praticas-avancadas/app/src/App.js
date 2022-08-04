import React from "react";
import PetShop from "./PetShop";

function App () {

    const handleClick = () => {
        console.log('Iniciando banho...');
    }

    return (
        <div>
            <PetShop 
                dogs={2}
                customerName='Caroline Castro'
                onClick={handleClick}
                status='done'
            />
        </div>
    )
}

export default App;