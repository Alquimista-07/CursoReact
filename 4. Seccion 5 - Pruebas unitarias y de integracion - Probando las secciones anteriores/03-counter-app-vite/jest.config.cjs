// Archivo de configuraciones para jest

module.exports = {
    
    // NOTA: Para que funcione el testEnvironmet es necesario instalar un paquete y para el cual ejecutamos el comando
    //       yarn add -D jest-environment-jsdom o en caso de usar npm instalarlo usando su respectivo comando
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']

}