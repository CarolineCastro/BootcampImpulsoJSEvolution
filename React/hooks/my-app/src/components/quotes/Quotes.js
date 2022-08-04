import React from "react";
import styled from "styled-components";
import { string } from 'prop-types';
import Button from "../button/Button";

const Quotes = ({ quote, speaker }) => {
    return(
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker> -{speaker}</Speaker>
            <Button>Quote No Jutsu</Button>
       </Wrapper>      
    );
};

Quotes.propTypes = {
    quote: string,
    speaker: string
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-botton: 50px;
`;

export default Quotes;