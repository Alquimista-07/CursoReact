//* Tarea - Componente CounterApp
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

  // NOTA: Recordemos que si esta función no tiene ninguna interación con elementos del componente fácilmente podemos crearla fuera del functional componenent
  //       pero si tuviera que interactura y la craramos fuera cuando se volviera a renderizar el componente en este caso no asignaria el espacio en memoria para 
  //       la función 
  const handleAdd = () => {
    console.log('+1');
    console.log(value);
  }

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ value }</h2>

        {/* EL enlace a la documentación oficial para los eventos en React es el siguiente:
            https://es.legacy.reactjs.org/docs/events.html
        */}
        {/* Mandamos por referencia al llamado a la función ya que recordemos que cuando recibimos un argumento el cual va a ser padado a la función lo podemos obviar ya que este se pasa de forma automática por referencia 
            y esto lo recordamos en la sección 3 de reforzamiento de JS
        */}
        <button onClick={ handleAdd }>
          +1
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value : 0,
}