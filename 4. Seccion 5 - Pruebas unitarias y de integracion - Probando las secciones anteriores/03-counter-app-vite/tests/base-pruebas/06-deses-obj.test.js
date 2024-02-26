import { usContext } from '../../src/base-pruebas/06-deses-obj';
 
describe('Pruebas en el archivo 06-deses-obj', () => {
 
  test('usContext debe de retornar un objeto', () => {
 
    const obj = {
      nombre: 'Steven Grant Rogers',
      rango: 'Captain',
      clave: 'Captain America',
      edad: 39,
    }
 
    const character = usContext(obj)
 
    const { clave, nombre, edad, rango } = obj
 
    expect(character).toEqual({
      nombre,
      rango,
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    })
  });
 
});