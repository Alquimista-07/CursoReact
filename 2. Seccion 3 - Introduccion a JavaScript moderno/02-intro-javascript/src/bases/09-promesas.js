// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

import { getHeroeById } from "./bases/08-imp-exp";

// Promesas
// Documentación oficial https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise


// Las promesas son asíncronas
// Resolve -> satisfactorio
// Reject -> fallo
/*
const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // Tarea
        // Importar el getHeroById(2);
        const p1 = getHeroeById(2);
        // console.log('2 segundos después');
        resolve( p1 );
        // reject('No se pudo encontrar el héroe');
    }, 2000);
});
*/

// then -> se realizo correctamente
// catch -> algo fallo y lo manejamos
// finally -> siempre se ejecuta
/*
promesa.then( ( heroe ) => {
    // console.log('Then de la promesa');
    console.log('heroe', heroe);
})
.catch(err => console.warn(err));
*/

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // Tarea
            // Importar el getHeroById(2);
            const p1 = getHeroeById(id);
            p1 ? resolve(p1) : reject('No se pudo encontrar el héroe');
            // reject('No se pudo encontrar el héroe');
        }, 2000);
    });

}

getHeroeByIdAsync(2)
// NOTA: Cuando mandamos la referencia a la función esta va a tomar como primer argumento lo que sea que reciba por lo tanto
//       podemos obviar hacer por ejemplo .then( heroe => console.log('Heroe:', heroe) )
    .then( console.log )
    .catch( console.warn );