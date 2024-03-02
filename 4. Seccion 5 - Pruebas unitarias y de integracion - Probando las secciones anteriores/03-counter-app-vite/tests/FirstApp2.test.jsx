// NOTA: Los enlaces a la documentación para testing-library que es usado para las pruebas del DOM y que es el recomendado por JEST
//       ya que JEST en esto no es muy bueno lo podemos encontrar en:
//       https://testing-library.com/docs/react-testing-library/intro
//       La documentación de JEST que es la que vamos a usar para las assesciones la encontramos en:
//       https://jestjs.io/docs/tutorial-react
//       Adicionalmente hay que hacer configuraciones sobre el archivo babel.config.cjs y el jest.config.cjs

import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    const title    = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';

   test('Debe de hacer match con el snapshot', () => {

    const { container } = render( <FirstApp title= { title } /> );
    expect( container ).toMatchSnapshot();

   });

   test('Debe de mostrar el mensaje, "Hola, Soy Goku"', () => {

    render( <FirstApp title= { title } /> );

    // NOTA: El screen hace referencia al objeto que estamos renderizando y esto nos ayuda a hacer limpiezas
    //       automáticas luego de cada prueba. Con la siguiente línea de código mostramos el objeto screen en la consola
    // screen.debug();

    expect( screen.getByText( title ) ).toBeTruthy();
    // expect( screen.getByText( title ) ).not.toBeTruthy(); // En caso e que quisieramos negar para verificar que no exista

   });

   test('Debe de mostrar el titulo en un h1', () => {

    render( <FirstApp title= { title } /> );
    
    // NOTA: Con el getByRole tenemos acceso a todos los elementos html que se usan en este caso como necesitamos el h1 entonces le indicamos que necesitamos
    //       un heading que se encuentra en el nivel 1
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );

   });

   test('Debe de mostrar el subtitulo envido por props', () => {

    render( 
        <FirstApp 
            title = { title }
            subTitle = { subTitle }
        /> 
    );
    
    expect( screen.getAllByText( subTitle ).length ).toBe(2);

   });

});