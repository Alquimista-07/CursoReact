import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp.js', () => {

    test('getHeroeById debe de retornar un hero por id', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );

    });

    test('getHeroeById debe de retornar undefined si no existe el id', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

    });

    //* Tarea:
    // getHeroesByOwner
    // Debe de retornar un arreglo con lo héroes de DC
    // Lenght === 3
    // toEqual al arreglo filtrado

    // Debe de retornar un arreglo con los héroes de Marvel
    // lengh === 2

    test('getHeroesByOwner debe de retornar un arreglo con héroes de DC y su longitud debe de ser 3', () => {

        const owner = 'DC';

        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' }, 
            { id: 3, name: 'Superman', owner: 'DC' }, 
            { id: 4, name: 'Flash', owner: 'DC' }
        ] );

        // NOTA: Otra forma que es mucho mejor a la anterior ya que puede que el día de mañana algo cambie en la data y por lo tanto al tener código en duro 
        //       estamos obligando a que si la data cambie tengamos que cambiar la prueba, por lo tanto esto es más flexible
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner) );

    });

    test('getHeroesByOwner debe de retornar un arreglo con héroes de Marvel y su longitud debe de ser 2', () => {

        const owner = 'Marvel';

        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( [ 
            { id: 2, name: 'Spiderman', owner: 'Marvel' }, 
            { id: 5, name: 'Wolverine', owner: 'Marvel' } 
        ] );

        // NOTA: Otra forma que es mucho mejor a la anterior ya que puede que el día de mañana algo cambie en la data y por lo tanto al tener código en duro 
        //       estamos obligando a que si la data cambie tengamos que cambiar la prueba, por lo tanto esto es más flexible
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner) );


    });


});