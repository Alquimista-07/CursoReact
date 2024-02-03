// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Desestructuración de Objetos
// Asignación Desestructurante
// Enlace con la documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado',
};

const { nombre: nombre2, clave, edad, } = persona;

console.log(nombre2);
console.log(edad);
console.log(clave);

// NOTA: Podemos desestructurar directamente en el argumento de la función
//       y adicionalmente podemos colocar valores por defecto como por ejemplo
//       un rango el cual no hace parte del objeto persona.
//       Otra cosa es que si el objeto persona ya tiene esa propiedad le coloca 
//       el valor que tiene la propiedad y no el que le colocamos por defecto.
// NOTA: Ese error es debido a la nueva versión de React (17). Ahora las palabras "use" y "set" al principio estan reservadas y solo se pueden usar en lugares específicos.

//       La solución es cambiar el nombre a cualquier otro que no tenga "use" o "set" al principio.
const context = ({ nombre, clave, edad, rango = 'Capitán' }) => {
    
    // console.log(nombre, edad, clave, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

context(persona);

const avenger = context(persona);

console.log(avenger);

//------------------
// Tarea
//------------------
// Extraer o desestructurar las propiedades de la función context
// Adicionalmente podemos desestructurar objetos internos o anidados para extraer sus propiedades
const { nombreClave, anios, latlng:{lat, lng} } = context(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

// Otra forma para desestructurar la latlng sería
/*
const {nombreClave, anios, latlng} = context(persona);
const{lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);
*/