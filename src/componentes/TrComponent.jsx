import { Fragment } from "react";
import TdComponent from "./TdComponent";
import PropTypes from 'prop-types';


const TrComponent = ({row,numbers,setNumbers,operation,setOperation,setViewHistory,setMessage,setError}) => {
    return ( 
        <Fragment>
            <tr>
                {/* Itero el arreglo recibido (La fila) */}
                {row.map((button)=>(
                    // Envio al TdComponent cada una de las columnas
                    <TdComponent
                        button={button}
                        numbers={numbers}
                        setNumbers={setNumbers}
                        key={button}
                        operation = {operation}
                        setOperation ={setOperation}
                        setViewHistory = {setViewHistory}
                        setMessage={setMessage}
                        setError={setError}
                    />
                ))}
            </tr>
        </Fragment>
    );
}
TrComponent.propTypes = {
    row: PropTypes.array.isRequired,
    numbers: PropTypes.string.isRequired,
    setNumbers: PropTypes.func.isRequired,
    operation: PropTypes.array.isRequired,
    setOperation: PropTypes.func.isRequired,
    setViewHistory: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
}
 
export default TrComponent;