import { Fragment } from "react";
import { Button, Td } from "../styled"
import Error from "./Error";
import PropTypes from 'prop-types';

const TdComponent = ({ button, numbers, setNumbers, operation, setOperation, setViewHistory,setMessage, setError }) => {

    const sendNumber = (button) => {
        // Creo la variable signos para poder realizar validaciones, al primer ingreso de dato
        let signos = ["+", "-", "*", "/", "=", 'CE', 'C', 'ME', '.'];
        // Aca evaluo la logitud,parseo el tipo cadena 'numbers' para que me devuelva un entero, ya que inicio mi state con un '0'
        // y tambien se evalua que el primer dato sea diferente de un signo para que me permita setear si y solo si es un numero.
        if (numbers.length === 1 && parseInt(numbers) === 0 && !signos.includes(button)) {
            setNumbers(button)
        }
        // Esta validacion me setea el state de Numbers borrando toda la operacion del display
        else if (button === 'CE') {
            setNumbers('0')
        }
        else if (button === '=') {
            // seteamos la variable a su estado inicial para eliminar el error de la pantalla
            setError(false)

            // obtenemos el ultima valor de la cadena
            let lastElement = numbers.substr(-1)

            // si el ultimo valor de la cadena es un signo, no permite que ejecute el eval que esta a continuacion
            if (signos.includes(lastElement)) {
                setError(true)
                return;
            }

            // Se hace calculo con la funcion eval() la cual evalúa el código del string y ejecuta la devolucion de una operacion aritmetica
            let calc = eval(numbers)
                        
            // Cuando la division es entre 0 me va a devolver Infinity, con esto seteo a cero y con el return no permito que me guarde en memoria.
            if(calc == 'Infinity' || isNaN(calc) ){
                setNumbers('0')
                setError(true)
                setMessage("No puedo dividir entre 0")
                return;
            }    

            // To.String lo uso para convertir calc de numero a string, para manipularlo con las distintas funciones de un campo tipo string
            // ya que sino romperia como por ejemplo con la funcion substring
            setNumbers(calc.toString())

            // Guardo en el objeto la operacion y el resultado
            let object = {
                operation: numbers,
                result: calc
            }
            //Ejecuto un Spread Operator para guardar en el arreglo el nuevo objeto creado   
            setOperation([...operation, object])
        }
        // Esta condicion me permite borrar el ultimo elemento que tenga la cadena
        else if (button === 'C') {
            setNumbers(numbers.substring(0, numbers.length - 1))
        }
        else if (button === 'ME') {
            setViewHistory(false)
        }
        // Aca evaluamos el correcto uso del punto, para que el mismo no se repita en una misma operacion si no lo antecede un signo.
        else if (button === '.') {
            // con el split divido la cadena en subcadenas, devolviendo como resultado un arreglo tomando como referencia el punto
            let arrNumber = numbers.split(".")
            // Se determina la longitud del arreglo para luego poder ubicar la ultima posicion del arreglo 
            let long = arrNumber.length
            // Extraemos del arreglo la ultima cadena o la ultima posicion para luego evaluar si ese arreglo contiene un signo
            let lastarray = arrNumber[long - 1]
            // obtenemos el ultima valor de la cadena
            let lastElement = lastarray.substr(-1)

            if (signos.includes(lastElement)) {
                return;
            }
            // Nuevamente aplico el split para dividir la cadena en subcadenas, tomando como referencia ''
            // Realizo un filter de ultimoarray para buscar en el mismo un signo, si consigo un signo lo almaceno dentro de valor
            let valor = lastarray.split('').filter((elem) => {
                return signos.includes(elem)
            })

            // Si valor no se encuentra vacio, entonces puedo permitir setear otro punto dentro de numbers
            // La segunda condicion solo se cumplira la primera vez que el usuario intente agregar el primer punto a numbers
            if (valor.length || long === 1) {
                setNumbers(numbers + button)
            }
        }
        else {
            // Obtengo el ultimo elemento de la cadena numbers
            let lastElem = numbers.substr(-1)
            // En toda esta expresion evaluamos si ultimo elemento es un signo 
            let lastIsaSign = signos.includes(lastElem)
            // Valido si ultimo elemento es un signo y si la nueva entrada (button) tambien es un signo, en ese caso sustituyo el anterior
            if (lastIsaSign && signos.includes(button)) {
                // Obtengo toda la expresion menos el ultimo caracter de esta 
                let temporal = numbers.substr(0, numbers.length - 1);
                // Seteo nuevamente numbers con la expresion temporal y el nuevo signo
                setNumbers(temporal + button)
            }
            // Sino es un signo me permite agregar un nuevo valor a numbers
            else {
                setNumbers(numbers + button)
            }
        }
    }

    return (
        <Fragment>
            <Td>
                {/* Agrego las propiedades a mi boton donde el onClick maneja el evento o el metodo que va a 
                        permitir setear el valor anterior por el valor actual del elemento*/}
                <Button
                    type='submit'
                    onClick={() => sendNumber(button)}>
                    {button}
                </Button>
            </Td>
        </Fragment>
    );
}
TdComponent.propTypes = {
    button: PropTypes.string.isRequired,
    numbers: PropTypes.string.isRequired,
    setNumbers: PropTypes.func.isRequired,
    operation: PropTypes.array.isRequired,
    setOperation: PropTypes.func.isRequired,
    setViewHistory: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
}

export default TdComponent;