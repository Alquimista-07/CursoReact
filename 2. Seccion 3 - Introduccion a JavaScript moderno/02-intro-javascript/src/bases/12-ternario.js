// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Operador condicional ternario

const activo = true;
let mensaje = '';

//-------------------------------------------
// Forma convencional
//-------------------------------------------
if( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}

console.log(mensaje);

//-------------------------------------------
// Usando ternario
//-------------------------------------------
const mensaje2 = ( activo ) ? 'Activo' : 'Inactivo';
const mensaje3 = (!activo) ? 'Activo' : null;

console.log(mensaje2);
console.log(mensaje3);

//-------------------------------------------
// Usando ternario forma corta
//-------------------------------------------
// const mensaje4 = (activo === true) && 'Activo';
const mensaje4 = activo && 'Activo';
const mensaje5 = !activo && 'Activo';

console.log(mensaje4);
console.log(mensaje5);