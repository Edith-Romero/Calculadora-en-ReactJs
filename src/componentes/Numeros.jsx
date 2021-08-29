import React, { Fragment } from 'react'
import styled from '@emotion/styled'

const Numeros = () => {

    const Colum = styled.td`
        text-align:center;
        vertical-align: middle; 
    `;

    const StylesButton = styled.button`
        background-color: darkgray;
        top: 100%;
        font-size: xx-large;
        padding-left: 40%;
        padding-right: 40%;
        border: unset;

        &:hover{
            background-color: #6c6c77;
            color: #fff;
        }
        
    `;

// Esta asignacion de estilo es unicamente para los botones mas grandes como + y =

    const BigButton = styled.button`
        background-color: darkgray;
        top: 100%;
        font-size: xx-large;
        padding-left: 40%;
        padding-right: 40%;
        padding-top: 20%;
        padding-bottom: 20%;
        border: unset;

        &:hover{
            background-color: #6c6c77;
            color: #fff;
        }
    `;

// Esta funcion va a recibir el numero cuando el usuario le de click a cada uno de los botones

    const sendNumber = (numero) => {
        console.log('El click en el numero funciona y es el numero', numero)
    }

    return(
        <Fragment>
            <tbody>
                <tr>
                    <Colum>                
                        <StylesButton>C</StylesButton>
                    </Colum>
                    <Colum>
                        <StylesButton>/</StylesButton>                                
                    </Colum>
                    <Colum>
                        <StylesButton>X</StylesButton> 
                    </Colum>
                    <Colum>
                        <StylesButton>-</StylesButton> 
                    </Colum>
                </tr>
                <tr>
                    <Colum>
                        <StylesButton
                            onClick={() => sendNumber(7)}
                        >7
                        </StylesButton> 
                    </Colum>
                    <Colum>
                        <StylesButton
                            onClick={() => sendNumber(8)}
                        >8
                        </StylesButton>
                    </Colum>
                    <Colum>
                        <StylesButton
                            onClick={() => sendNumber(9)}
                        >9
                        </StylesButton>                                
                    </Colum>
                    <Colum rowSpan='2'>
                        <BigButton>
                        +
                        </BigButton>
                    </Colum>
                </tr>
                <tr>
                    <Colum>
                        <StylesButton
                            onClick={() => sendNumber(4)}
                            >4
                        </StylesButton>                                
                    </Colum>
                    <Colum>
                        <StylesButton
                            onClick={() => sendNumber(5)}
                            >5
                        </StylesButton>                                  
                    </Colum>
                    <Colum>
                        <StylesButton
                            type= 'number'
                            onClick={() => sendNumber(6)}
                        >6
                        </StylesButton>  
                    </Colum>
                </tr>
                <tr>
                    <Colum>
                        <StylesButton
                            type= 'number'
                            onClick={() => sendNumber(1)}
                        >1
                        </StylesButton>                                  
                    </Colum>
                    <Colum>
                        <StylesButton
                            type= 'number'
                            onClick={() => sendNumber(2)}
                        >2
                        </StylesButton>  
                    </Colum>
                    <Colum>
                        <StylesButton
                            type= 'number'
                            onClick={() => sendNumber(3)}
                        >3
                        </StylesButton>  
                    </Colum>
                    <Colum rowSpan='2'>
                        <BigButton>
                        =
                        </BigButton>                              
                    </Colum>
                </tr>
                <tr>
                    <Colum colSpan='2'>
                        <StylesButton
                            onClick={() => sendNumber(0)}
                        >0
                        </StylesButton>                                  
                    </Colum>
                    <Colum>
                        <StylesButton>.</StylesButton>                                    
                    </Colum>
                </tr>
            </tbody>
        </Fragment>
    );
}

export default Numeros;