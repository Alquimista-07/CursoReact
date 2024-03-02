// NOTA: Los enlaces a la documentación para testing-library que es usado para las pruebas del DOM y que es el recomendado por JEST
//       ya que JEST en esto no es muy bueno lo podemos encontrar en:
//       https://testing-library.com/docs/react-testing-library/intro
//       La documentación de JEST que es la que vamos a usar para las assesciones la encontramos en:
//       https://jestjs.io/docs/tutorial-react
//       Adicionalmente hay que hacer configuraciones sobre el archivo babel.config.cjs y el jest.config.cjs

import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    // NOTA: De momento vamos a comentar el snapshot ya que este es recomendado agregarlo al final cuando sabemos que el componente esta terminado y no va a recibir modificaciones
    //       con el fin de que se mantenga por un breve periodo en el tiempo para validar futuras modificaciones
    /*
    test('Debe de hacer match con el snapshot', () => {

        const title = 'Hola, Soy Goku'
        const { container } = render( <FirstApp title = { title } /> );

        expect( container ).toMatchSnapshot();

    });
    */

    test('Debe de mostrar el título en un h1', () => {

        const title = 'Hola, Soy Goku'
        const { container, getByText, getByTestId } = render( <FirstApp title = { title } /> );
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );

        expect( getByTestId('test-title').innerHTML ).toContain( title );

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {

        // NOTA: EL getByText se asegura de que sea un solo elemento por lo tanto si tenemos varios elementos con el mismo texto
        //       en este caso el subtitulo debemos usar `*AllBy*`, `queryAllByText`, `getAllByText`, o `findAllByText`
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp 
                title = { title }
                subTitle = { subTitle }
            /> 
        );

        expect( getAllByText(subTitle).length ).toBe(2);

    });

});