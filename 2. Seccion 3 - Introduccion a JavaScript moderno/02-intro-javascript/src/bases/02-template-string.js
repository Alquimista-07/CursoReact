// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Template String
const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);