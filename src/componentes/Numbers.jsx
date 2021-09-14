import React, { Fragment } from 'react'
import TrComponent from './TrComponent';


const Numbers = ({numbers, setNumbers,operacion,setOperacion,setViewHistory}) => {

    const arrayNumbers = [['ME','CE','C','/'],['7','8','9','*'],['4','5','6','-'],['1','2','3','+'],['0','.','=']]

    return(
        <Fragment>
            <table>
                <tbody>
                    {arrayNumbers.map((row, index)=>(
                        <TrComponent
                            row={row}
                            key={index}                        
                            numbers={numbers} 
                            setNumbers={setNumbers}
                            operacion = {operacion}
                            setOperacion ={setOperacion}
                            setViewHistory = {setViewHistory}
                        />
                    ))}
                </tbody>
            </table>           
        </Fragment>
    );
}

export default Numbers;