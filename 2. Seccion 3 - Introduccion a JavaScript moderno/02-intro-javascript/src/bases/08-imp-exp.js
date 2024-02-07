// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Import, export y funciones comunes de arreglos
// Enlace con la documentación Array.prototype.find(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

import heroes, { owners } from '../data/heroes';



// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if(heroe.id === id) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     });
// }

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id );

console.log(getHeroeById(2));

// const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner.includes(owner) );
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner );

console.log(getHeroesByOwner('Marvel'));