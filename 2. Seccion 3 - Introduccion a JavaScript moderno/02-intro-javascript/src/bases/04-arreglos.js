// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Arreglos

// const arreglo = new Array(100); // Arreglo con 100 posiciones vacías
const arreglo = [1,2,3,4];

// NOTA: OJO no es recomendable usar el push porque el push modifica el objeto principal.
//       Por lo tanto cuando queramos insertar un valor nuevo al arreglo lo vamos a hacer
//       con ayuda del operador Spred
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5];

// Enlace con la documentación del map.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// NOTA: La función (callback) se va a ejecutar por cada uno de los elementos de arreglo2, como si fuera un ciclo
const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);