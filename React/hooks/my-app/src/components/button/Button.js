//import React from "react";
//import { string } from 'prop-types';
import styled from "styled-components";

/*const Button = ({children}) => {
    return <button>{children}</button>;
};

Button.propTypes = {
    children: string
};*/

const Button = styled.button `
    background: #DC872C;
    color: #fff;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;

    &:hover {
        background: #a40000;
    }
`

export default Button;
