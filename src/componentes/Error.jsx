import React from 'react'
import PropTypes from 'prop-types';

// Este componente  me permite crear mensajes de error de manera dinamica
const Error = ({Message}) => (
    <p className="alert alert-danger error">{Message}</p>
)
Error.prototype ={
    Message: PropTypes.string.isRequired,
 }
export default Error;