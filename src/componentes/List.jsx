import React from 'react'

const List = ({operacion,setOperacion, setNumbers,setViewHistory}) => {

    const eliminarOperacion = index =>{
            const eliminarValor = operacion.filter((pepe, key)=> key !== index);
            setOperacion(eliminarValor);
        }

    const restoreOperacion = (restore) =>{
        setNumbers(restore);
        console.log(restore)
    } 

    const changeView = () => {
        setViewHistory(true)
    }
        
    return ( 
        <div>
            {operacion.map((history, index)=>(
                <div key={index}>
                    <h2>{history.operacion}</h2>
                    <h1>{history.resultado}</h1>
                    <button
                        onClick={()=>{restoreOperacion(history.resultado)}}
                    >
                        RECUPERAR
                    </button>
                    <button 
                        onClick={()=> {eliminarOperacion(index)}}
                    >
                        BORRAR
                    </button>
                    <hr />
                </div>
            ))}
            <button 
                onClick={()=>{changeView()}}
            >
            VOLVER
            </button>
        </div>
     );
}

// console.log();
// console.log()
 
export default List;

