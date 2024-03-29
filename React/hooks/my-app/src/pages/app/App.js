
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import Quotes from '../../components/quotes/Quotes';
import getQuote from '../../services/quoteServices/quoteService';
import jutsoSound from '../../sounds/jutso.mp3'

const audio = new Audio(jutsoSound);

function App(){

    const isMounted = useRef(true);

    const [ quoteState, setQuoteState ] = useState({
        quote: 'loading quote ...', 
        speaker: 'loading speaker...'
    });

    const onUpdate = async () => {
        const quote = await getQuote();
        
        if(isMounted.current) {
            audio.play();
            setQuoteState(quote);
        }

    };

    useEffect(() => {
        onUpdate();

        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <Content>
            <Quotes
            {...quoteState} onUpdate={onUpdate}/>
            <NarutoImg src={narutoImg} alt="Naruto with a kunai"/>
        </Content>
    );
}

const Content = styled.div `
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center
`;

const NarutoImg = styled.img `
    max-width: 50vw;
    align-self: flex-end;
`;

export default App;


