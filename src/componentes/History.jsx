import React from 'react'
import {Fondo,ButtonMemory} from '../styled'
import PropTypes from 'prop-types';


const History = ({operation,setOperation, setNumbers,setViewHistory}) => {

    // Este metodo me permite evaluar la key de cada uno de los elementos para poder eliminar solo un arreglo
    // y me deje los que tengan distinta key al que pretendo eliminar.
    const deleteOperation = index =>{
            const deleteValue = operation.filter((val, key)=> key !== index);
            setOperation(deleteValue);
        }
    // Este metodo me permite retornar el resultado de la operacion a la cual le de click
    const restoreOperation = (restore) =>{
        setNumbers(restore);
    } 
    // Este metodo me permite retornar al componente de los botones
    const changeView = () => {
        setViewHistory(true)
    }
        
    return ( 
        <Fondo>
            <ButtonMemory
                onClick={()=>{changeView()}}
            >
            VOLVER
            </ButtonMemory>
            {/* Aca se accede al arreglo para extraer la operacion y el resultado, que se va mostrar en el historial */}
            {operation.map((history, index)=>(
                <div key={index}>
                    <h2>{history.operation}</h2>
                    <h1>{history.result}</h1>
                    <ButtonMemory
                        onClick={()=>{restoreOperation(history.result)}}
                    >
                        RUCUPERAR
                    </ButtonMemory>
                    <ButtonMemory 
                        onClick={()=> {deleteOperation(index)}}
                    >
                        BORRAR
                    </ButtonMemory>
                    <hr />
                </div>
            ))}
            {/* <button 
                onClick={()=>{changeView()}}
            >
            VOLVER
            </button> */}
        </Fondo>
     );
}
History.propTypes = {
    operation: PropTypes.array.isRequired,
    setOperation: PropTypes.func.isRequired,
    setViewHistory: PropTypes.func.isRequired,
    setNumbers: PropTypes.func.isRequired,
}
export default History;

