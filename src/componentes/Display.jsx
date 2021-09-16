import React from 'react';
import {Screen} from '../styled';
import PropTypes from 'prop-types';

const Display = ({numbers}) => {

    return (
        // Este componente solo se encarga de mostrar por pantalla las operaciones.
        <Screen>        
            {numbers}
        </Screen>
    );
}
Display.propTypes = {
    numbers: PropTypes.string.isRequired,
}
export default Display; 

