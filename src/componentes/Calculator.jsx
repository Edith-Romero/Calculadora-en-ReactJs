import React, {Fragment, useState,useEffect} from 'react';
import Numbers from './Numbers';
import Display from './Display';
import List from './List';
import {Fondo} from '../styled'


const Calulator = () => {

    // obtener la infromacion guardada en el state
    let operacionesIniciales = JSON.parse(localStorage.getItem('operacionesIniciales'));
    if(!operacionesIniciales) {
        operacionesIniciales = [];
    }

    const [numbers,setNumbers] = useState('0');
    const [operacion,setOperacion] = useState(operacionesIniciales);
    const [viewhistory,setViewHistory] = useState(true)

    // con este Hooks esta atendo cuando el state cambia y guarda en localStore
    useEffect( () => {
        localStorage.setItem('operacionesIniciales', JSON.stringify(operacion))
    }, [operacion] ); 
    
    return (
        <Fragment>
            <div className="container">
                <Fondo>
                    {/* Divido la Calculadora en dos componentes */}
                    <Display
                    numbers={numbers}
                    />
                    {viewhistory ?                
                    <Numbers
                        numbers = {numbers}
                        setNumbers = {setNumbers}
                        operacion = {operacion}
                        setOperacion ={setOperacion}
                        setViewHistory = {setViewHistory}
                    /> : 
                    <List
                        operacion={operacion}
                        setOperacion ={setOperacion}
                        setNumbers={setNumbers}
                        setViewHistory = {setViewHistory}
                    />
                    }
                </Fondo>
            </div>
        </Fragment>    
    );
}
export default Calulator;

