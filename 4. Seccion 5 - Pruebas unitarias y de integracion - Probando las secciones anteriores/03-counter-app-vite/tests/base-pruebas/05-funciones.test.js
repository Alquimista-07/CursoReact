import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe("Pruebas en 05-funciones", () => {

  test("getUser debe de retornar un objeto", () => {

    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    // NOTA: Recordemos que para los primitivos en JavaScript se compara su valro, pero para los objetos esto no es lo mismo ya que 
    //       para ellos se compara es su ubicación en memoria por lo tanto aunque visualmente sean iguales nos va a dar un error por eso
    //       mismo porque su ubicación en el espacio en memoria es distinto. Por lo tanto acá para compararlos no podemos usar el toBe 
    //       sino que debemos usar es el toStrictEqual o tl toEqual
    // expect( testUser ).toStrictEqual( user );
    expect( testUser ).toEqual( user );

  });

  test('getUsuarioActivo debe de retornar un objeto', () => {

    const name = 'Fernando';

    const testUser = {
        uid: 'ABC567',
        username: name
    }

    const user = getUsuarioActivo( name );

    expect( testUser ).toStrictEqual( user );

  });

});
