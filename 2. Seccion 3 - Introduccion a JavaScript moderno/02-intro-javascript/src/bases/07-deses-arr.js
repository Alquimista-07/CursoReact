// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Desestructuración de Arreglos
// Asignación desestructurante de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

// NOTA: Como los arreglos son por posición podemos colocar posiciones vacías sin nombrar variables
//       en dichas posiciones, y si nombramos la variable de la posición que queremos
const [ , , p3 ] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre
const usestate = (valor) => {
    return [ valor, () => { console.log('Hola Mundo!') } ];
}

const [ nombre, setNombre ] = usestate('Goku');
console.log(nombre);
setNombre();