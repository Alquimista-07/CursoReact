// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Objtos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 4523446,
        lat: 14.4556,
        lng: 34.4354563
    }
};

// NOTA: OJO recordemos que JavaScript pasa los objetos por referencia 
//       por lo tanto simplemente no podemos igualar un objeto a otro ya
//       que al modificar valores alteramos el objeto original.
//       Por lo tanto recordemos que podemos usar el operador spred (...) para 
//       para clonar o extraer las propiedades y asignarlas a un nuevo objeto
//       con un espacio en memoria diferente
const persona2 = { ...persona };
persona2.nombre = 'Peter';

// console.log({persona});
// console.table(persona);
console.log(persona);
console.log(persona2);