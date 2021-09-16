import React, { Fragment } from 'react'
import TrComponent from './TrComponent';
import {Table} from '../styled'
import PropTypes from 'prop-types';


const Numbers = ({numbers,setNumbers,operation,setOperation,setViewHistory,setError}) => {
    // Creo un arreglo de arreglo para identificar cuales van a ser las filas y columnas respectivamente, cuando pase estos arreglos a los distintos
    // componentes hijos, los cuales se van a encargar de iterar los mismos
    const arrayNumbers = [['ME','CE','C','/'],['7','8','9','*'],['4','5','6','-'],['1','2','3','+'],['0','.','','=']]

    return(
        <Fragment>
            <Table className="table table-hover">
                <tbody>
                    {/* Itero el arreglo y comienzo a separar por filas */}
                    {arrayNumbers.map((row, index)=>(
                        // Envio al TrComponent cada una de las filas que estoy iterando
                        <TrComponent
                            row={row}
                            key={index}                        
                            numbers={numbers} 
                            setNumbers={setNumbers}
                            operation = {operation}
                            setOperation ={setOperation}
                            setViewHistory = {setViewHistory}
                            setError={setError}
                        />
                    ))}
                </tbody>
            </Table>           
        </Fragment>
    );
}
Numbers.propTypes = {
    numbers: PropTypes.string.isRequired,
    setNumbers: PropTypes.func.isRequired,
    operation: PropTypes.array.isRequired,
    setOperation: PropTypes.func.isRequired,
    setViewHistory: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
}
export default Numbers;