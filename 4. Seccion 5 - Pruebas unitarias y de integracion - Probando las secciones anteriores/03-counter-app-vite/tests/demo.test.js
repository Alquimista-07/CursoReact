// NOTA: La documentación del framework de pruebas JEST la podemos encontrar en el siguiente enlace:
//       https://jestjs.io/docs/getting-started
// NOTA: Para crear la prueba debemos usar el método test() dentro del cual vamos a poner una descripción
//       y luego le colocamos un callback
test('Esta prueba no debe de fallar', () => {
    // NOTA: Acá la idea es hacer las asserciones
    if(0 === 1) {
        throw new Error('No puede dividir entre cero');
    }
});