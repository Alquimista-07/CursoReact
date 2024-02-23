// NOTA: La documentación del framework de pruebas JEST la podemos encontrar en el siguiente enlace:
//       https://jestjs.io/docs/getting-started
// NOTA: Para crear la prueba debemos usar el método test() dentro del cual vamos a poner una descripción
//       y luego le colocamos un callback

// Agreganmos un agrupador
describe('Pruebas en <DemoComponent />', () => {

    test('Esta prueba no debe de fallar', () => {
        // NOTA: Acá la idea es hacer las asserciones
        
        // NOTA: Hay tres pasos para las pruebas pero no necesariamente deben estar los tres
        // 1. Inicialización
        // 2. Estímulo -> Lo que aplicamos al sujeto de pruebas
        // 3. Aserciones -> Observar el comportamiento... esperado.
    
        // 1. Inicialización
        const message1 = 'Hola Mundo';
    
        // 2. Estímulo
        const message2 = message1.trim();
    
        // 3. Aserciones
        // En este caso ya no usamos el if para comparar que los mensajes sean iguales ya que JEST nos probee de métodos para esto
        // Enlace documentación expect: https://jestjs.io/docs/expect
        expect( message1 ).toBe(message2);
    
    });
    
});
