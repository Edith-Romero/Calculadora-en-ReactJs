import React, { Fragment, useState, useEffect } from 'react';
import Numbers from './Numbers';
import Display from './Display';
import History from './History';
import { Fondo } from '../styled'
import Error from './Error';


const Calculator = () => {

    // Esta operacion permite guardar lo que se obtenga del localStorage, cada vez que 
    // monta el componente, es decir cada vez que actualizo la pagina
    let initialOperations = JSON.parse(localStorage.getItem('initialOperations'));
    //  InitialOperation valida si lo que esta trayendo esta vacio o lleno 
    if (!initialOperations) {
        // creando un arreglo que me llena el State de Operation
        initialOperations = [];
    }

    // Este State guarda el valor que se muestra por pantalla
    const [numbers, setNumbers] = useState('0');
    // Este State guarda el valor de la operacion completa
    const [operation, setOperation] = useState(initialOperations);
    // Este State guarda la operacion y el resultado para luego mostrarlo al click del boton ME (Memoria o historial)
    const [viewhistory, setViewHistory] = useState(true)
    // Este State se crea con la intencion de poder crear mensajes de error de manera dinamica reutilizando el componente
    const [error, setError] = useState(false);

    // El useEffect permite guarda en localStore cuando el State Operation cambia, esto sucede cuando se le da al igual(=)
    useEffect(() => {
        localStorage.setItem('initialOperations', JSON.stringify(operation))
    }, [operation]);

    return (
        <Fragment>
            <div className="container">
                <div>
                    {/* La finalidad de este mensaje es que al ingresar el signo = igual despues de un signo me indique que es un error*/}
                    {error ? <Error mensaje="Operacion no valida intente de nuevo" /> : null}
                </div>
                <Fondo>
                    {/*Aplico componentes condicionales para cargar el componente Numbers o el History al pulsar el boton ME (Memoria/historial)
                        o el boton VOLVER */}
                    <Display
                        numbers={numbers}
                    />
                    {/* Este ternario me permite que al cambiar el State muestre un componente u otro  */}
                    {viewhistory ?
                        <Numbers
                            numbers={numbers}
                            setNumbers={setNumbers}
                            operation={operation}
                            setOperation={setOperation}
                            setViewHistory={setViewHistory}
                            setError={setError}
                        /> :
                        <History
                            operation={operation}
                            setOperation={setOperation}
                            setNumbers={setNumbers}
                            setViewHistory={setViewHistory}
                        />
                    }
                </Fondo>
            </div>
        </Fragment>
    );
}
export default Calculator;

