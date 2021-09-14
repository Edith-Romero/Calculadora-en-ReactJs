import { Fragment} from "react";

const TdComponent = ({button,numbers,setNumbers,operacion,setOperacion,setViewHistory}) => {


const sendNumber = (button) => {

    let signos = ["+", "-", "*", "/", "=",'CE','C','ME','.'];
    
    if(numbers.length === 1 && parseInt(numbers) === 0  && !signos.includes(button)){
        setNumbers(button)
    }
    else if(button === 'CE'){
        setNumbers('0')
    }
    else if(button === '='){
        
        let ultimoElemento = numbers.substr(-1)
        console.log('ULTIMO DIGITO DE LA CADENA', ultimoElemento)
        
        if(signos.includes(ultimoElemento)){
            console.log("ERROR")
            return;
        }

        let calc = eval(numbers)
        setNumbers(calc.toString()) //      
        
        let objeto = {
            operacion: numbers,
            resultado: calc
        }   
        setOperacion([...operacion, objeto])
    }
    else if(button === 'C'){
        setNumbers(numbers.substring(0,numbers.length -1))
    }
    else if(button === 'ME'){
        setViewHistory(false)
    }
    else if(button === '.'){
        let arrNumber = numbers.split(".")
        console.log(arrNumber)
        let long = arrNumber.length
        console.log(long)
        console.log('ultimo arreglo', arrNumber[long-1])
        let ultimoarray = arrNumber[long-1]
      
        let valor = ultimoarray.split('').filter((ultimo)=>{
            return signos.includes(ultimo)
        })

        console.log('valor', valor)

        if(valor.length || long === 1){
            setNumbers(numbers + button)
        }
    }
    else{
        console.log(numbers)
        let ultimoElemento = numbers.substr(-1)
        let ultimoEsUnSigno = signos.includes(ultimoElemento)

        if(ultimoEsUnSigno && signos.includes(button)){
            let temporal = numbers.substr(0, numbers.length-1);
            setNumbers(temporal + button)
        }
        else{
            setNumbers(numbers + button)
        }
    }
}

    return ( 
        <Fragment>
                <td>
                    <button
                        type = 'submit'                    
                        onClick={() => sendNumber(button)}>
                        {button}
                    </button>
                </td>
        </Fragment>
    );
}
 
export default TdComponent;