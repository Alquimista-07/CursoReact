// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Funciones

//----------------------------
// Función tradicional
//----------------------------
// NOTA: Se recomienda crear o definir funciones de la siguiente manera ya que si las creamos de la forma
//       convencional function saludar(nombre){} podemos por error asignar el nombre de la función
//       a una variable y romper la referencia a la función causando que nuestro código falle.
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

// NOTA: Intentamos cambiar la referencia de la función donde vemos que da error pero si lo realizaramos como se
//       mencionó antes con function saludar(nombre){} no daría error y cambiariamos la referencia dando como resultado
//       el nuevo valor que sería 20
// saludar = 20;

//-------------------------------------
// Arrow Function o función de flecha
//-------------------------------------
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

// Simplificamos la función aún más obviando el return
const saludar3 = (nombre) => `Hola, ${nombre}`;

// Función de flecha sin parámetro
const saludar4 = () => 'Hola Mundo!!!...';

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Milk'));
console.log(saludar4());

// NOTA: En este caso como estamos retornando un objeto si es necesario usar la palabra reservada return
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502',
    }
}

// NOTA: Adicionalmente podemos obviar la palabra return pero para esto tenemos que colocar paréntesis,
//       como se muestra a continuación.
const getUser2 = () => ({
    uid: 'DEF456',
    username: 'ElPapi1504',
});

const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

// ----------------------------------------------------------------------
// TAREA
// ----------------------------------------------------------------------
// 1. Transformar la función dada a una función de flecha
// 2. Tiene que retornar un objeto implícito (NOTA: Es sin usar la palabra 
//    reservada return)
// 3. Pruebas
// ----------------------------------------------------------------------
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre,
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

//--------------------
// Solución tarea
//--------------------
const getUsuarioActivoTarea = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre,
    }
);

const usuarioActivoTarea = getUsuarioActivoTarea('Ariadna');
console.log(usuarioActivoTarea);