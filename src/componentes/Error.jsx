import React from 'react'
import PropTypes from 'prop-types';

// Este componente  me permite crear mensajes de error de manera dinamica
const Error = ({mensaje}) => (
    <p className="alert alert-danger error">{mensaje}</p>
)
Error.prototype ={
    mensaje: PropTypes.string.isRequired,
 }
export default Error;