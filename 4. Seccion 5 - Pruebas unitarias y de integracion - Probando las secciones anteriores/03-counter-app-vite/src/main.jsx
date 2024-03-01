// NOTA: El snippet para crear la importación de react es imr
import React from 'react';
import ReactDOM from 'react-dom/client';

// NOTA: Ojo el nombre que le demos a esta importación depende del nombre con el que estemos exportando
//       la función o el functional component 
// import { HelloWorldApp } from './HelloWorldApp';

import { FirstApp } from './FirstApp';

// Importación de los estilos css globales que creamos
import './styles.css';
// import { CounterApp } from './CounterApp';

// Si hubieramos exportado por defecto la importación podría ser de la siguiente manera:
// import HelloApp from './HelloWorldApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* Por lo tanto la si exportaramos e importaramos de la forma por defecto entonces la usariamos de la siguiente manera: */}
        {/* <HelloApp/> */}
        <FirstApp />
        {/* {<CounterApp value={ 10 }/>} */}
    </React.StrictMode>
);