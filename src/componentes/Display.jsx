import React from 'react';
import {Screen} from '../styled';

const Display = ({numbers}) => {

    // // Aca se da estilo indepediente al display que modifica el estilo de mi table inicial
    // const Display = styled.div `
    //     width: 100%;
    //     background-color: #01010c;
    //     font-size: xx-large;
    //     color: aquamarine;
    //     text-align: right;
    //     padding-right: 10px ;
    // `;

    return (
        <Screen>        
            {numbers}
        </Screen>
    );
}

export default Display; 

