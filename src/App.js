import React, { Fragment } from 'react'
import Calculator from './componentes/Calculator'

function App() { 
  return (
    <Fragment>
      {/* Dejo el componente app habilitado unicamente para mostrar el componente calculadora con la intención de usarlo
       para mostrar otros componentes que se puedan crear a futuro*/}
      <Calculator/>
    </Fragment>
  );
}
export default App;
