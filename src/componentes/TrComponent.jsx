import { Fragment } from "react";
import TdComponent from "./TdComponent";

const TrComponent = ({row,numbers,setNumbers,operacion,setOperacion,setViewHistory}) => {
    return ( 
        <Fragment>
            <tr>
                {row.map((button)=>(
                    <TdComponent
                        button={button}
                        numbers={numbers}
                        setNumbers={setNumbers}
                        key={button}
                        operacion = {operacion}
                        setOperacion ={setOperacion}
                        setViewHistory = {setViewHistory}
                    />
                ))}
            </tr>
        </Fragment>
    );
}
 
export default TrComponent;