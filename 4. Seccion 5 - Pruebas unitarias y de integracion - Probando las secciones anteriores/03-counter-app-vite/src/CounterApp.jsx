// Importamos el hook useState
// NOTA: La documentación la podemos encontrar en: https://es.legacy.reactjs.org/docs/hooks-intro.html
import { useState } from 'react';

//* Tarea - Componente CounterApp
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

  // NOTA: Tenemos que tener en cuenta que el primer valor o primera variable corresponde al valor que le quiero dar
  //       el segundo valor o variable corresponde a la función que va a permitir cambiar el estado y el parámetro 
  //       que le definimos a la función useState corresponde al valor inicial del estado que puede ser mandado desde
  //       el componente padre como un prop o definido como un valor estático directamente en la función.
  const [counter, setCounter] = useState( value );

  // NOTA: Recordemos que si esta función no tiene ninguna interación con elementos del componente fácilmente podemos crearla fuera del functional componenent
  //       pero si tuviera que interactura y la craramos fuera cuando se volviera a renderizar el componente en este caso no asignaria el espacio en memoria para 
  //       la función 
  const handleAdd = () => {
    // console.log('+1');
    // console.log(value);
    // console.log(event);

    // NOTA: Cuando mandamos a llamar un set le estamos diciendo a React que el estado cambio y por lo tanto tienes que volver
    //       a renderizar el componente y esto es muy eficiente ya que React cambia solo el bloque html que se ve implicado
    /*
    setCounter( counter + 1 );
    */

    // Otra forma de llamar y cambiar el estado para tener acceso al valor del counter sería
    // y las dos son totalmente válidas y van a darse circunstancias donde se va a necesitar
    // hacerlo de una manera o la otra.
    setCounter( (c) => c + 1 );
  }

  const handleSubtract = () => setCounter( counter - 1 );

  const handleReset = () => setCounter( value );

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        {/* EL enlace a la documentación oficial para los eventos en React es el siguiente:
            https://es.legacy.reactjs.org/docs/events.html
        */}
        {/* Mandamos por referencia al llamado a la función ya que recordemos que cuando recibimos un argumento el cual va a ser padado a la función lo podemos obviar ya que este se pasa de forma automática por referencia 
            y esto lo recordamos en la sección 3 de reforzamiento de JS
        */}
        <button onClick={ handleAdd }>
          +1
        </button>

        <button onClick={ handleSubtract }>-1</button>
        <button onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
}

// CounterApp.defaultProps = {
//     value : 0,
// }