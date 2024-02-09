// NOTA: El snippet para crear la importación de react es imr
import React from 'react';
import ReactDOM from 'react-dom/client';

// NOTA: Usualmente todo en react comienza con un componente o un functional componenet
//       y es el punto de entrada de la aplicación y esos componentes no son más que una 
//       función.
//       Otra cosa es que podemos trabajar con clases pero estas ya no es muy recomendado usarlas
//       aunque aún se pueda trabajar con ellas, lo recomendado es trabar con functional components
function App() {
    // Este return en pocas palabras es como si realizaramos en JS lo siguiente: 
    // document.createElement... pero de una forma más sencilla y eleganta
    return (<h1>Hola Mundo!!!</h1>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);