// Import, export y funciones comunes de arreglos
// Enlace con la documentación Array.prototype.find(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owners = ['DC', 'Marvel'];

export default heroes;

// Otra forma de exportación múltiple con una por defecto
// export {
//     heroes as default,
//     owners,
// }