import React from 'react';
import styled from '@emotion/styled';

const Pantalla = () => {

    const Display = styled.div `
            width: 100%;
            background-color: #01010c;
            font-size: xx-large;
            color: aquamarine;
            text-align: right;
            padding-right: 10px ;
    `;

    return (
        <thead>
            <tr>
                <td colSpan = '4'>        
                    <Display>
                        1+1
                    </Display>
                </td>
            </tr>
        </thead>
    );
}

export default Pantalla; 