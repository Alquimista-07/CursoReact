import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

// NOTA: Como funciona el framework de pruebas JEST es de forma síncrona por lo tanto debemos hacer algo ya que nuestra función
//       es una promesa asíncrona. Por lo tanto nosotros tenemos que decirle a jest que espere a que la promesa se resuelva, por
//       lo tanto podemos hacerlo de dos forma que es usando asyn y await o podemos también decirle a jest que espere a que tenga
//       la respuesta usando un parámetro llamdo done que usualmente se llama así y el cual es una función que se manda a llamar 
//       cuando se termina y le dice a jest que ya termino
describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un héroe', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
        .then( heroe => {

            expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
                
            done();
        });

    });

    // Evaluamos la exception
    test('getHeroeByIdAsync debe de obtener un error si héroe no existe', ( done ) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error => {

                expect( error ).toBe( `No se pudo encontrar el héroe ${id}` );

                done();
            });

    });

});