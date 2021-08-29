import React from 'react';
import Numeros from './Numeros';
import Pantalla from './Pantalla';
import Styled from '@emotion/styled';

const Calculadora = () => {

    const Fondo = Styled.div`
        background: darkgray;
        padding: unset;
    `;    

    return (
        <Fondo className="container">
            <table className="table table-bordered">
                {/* Divido la calculadora en dos componentes */}
                <Pantalla/>
                <Numeros/>
            </table>
        </Fondo>
    );
}
export default Calculadora;